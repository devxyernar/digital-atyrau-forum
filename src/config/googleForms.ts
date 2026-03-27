// src/config/googleForms.ts
//
// ИНСТРУКЦИЯ ПО НАСТРОЙКЕ:
// 1. Создайте Google Form для слушателей (attendee)
// 2. Создайте Google Form для спикеров (speaker)
// 3. В каждой форме откройте DevTools → Network → отправьте форму вручную
// 4. Найдите POST запрос на formResponse и скопируйте entry.XXXXXXXX для каждого поля
// 5. Замените значения ниже

export interface FormConfig {
  formId: string;
  fields: Record<string, string>; // key = название поля, value = entry ID
}

export const GOOGLE_FORMS_CONFIG = {
  attendee: {
    formId: "1FAIpQLSeczA4kPz3nnxZsJxrWu5g9eYBjGxH3npkEMClh7lWX1Q6_gw",
    fields: {
      name: "entry.124443862",        // ФИО
      org: "entry.1234825077",        // Организация
      position: "entry.634175876",    // Должность
      email: "entry.648792181",       // Email
    },
  } as FormConfig,

  speaker: {
    formId: "1FAIpQLSdba8AXmRN01ZYPJxJo2AoNEZH6XhQ4or47acLXO9bguVaahw",
    fields: {
      name: "entry.408428726",        // ФИО
      org: "entry.1865358651",        // Организация
      position: "entry.241412505",    // Должность
      email: "entry.157039442",       // Email
      topic: "entry.571552614",       // Тема выступления
      theses: "entry.1689274707",     // Тезисы
    },
  } as FormConfig,
};

// -----------------------------------------------------------------
// submitToGoogleForm
// Использует скрытый iframe для отправки без CORS ошибок.
// Данные реально попадают в Google Spreadsheet.
// -----------------------------------------------------------------
export async function submitToGoogleForm(
  type: "attendee" | "speaker",
  data: Record<string, string>
): Promise<void> {
  const config = GOOGLE_FORMS_CONFIG[type];
  const formUrl = `https://docs.google.com/forms/d/e/${config.formId}/formResponse`;

  const iframeName = `gf_submit_${Date.now()}`;
  const iframe = document.createElement("iframe");
  iframe.name = iframeName;
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  const form = document.createElement("form");
  form.method = "POST";
  form.action = formUrl;
  form.target = iframeName;

  // --- обязательные скрытые поля Google ---
  const hiddenFields = {
    "fvv": "1",
    "draftResponse": "[]",
    "pageHistory": "0",
  };

  Object.entries(hiddenFields).forEach(([key, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });

  // --- твои поля ---
  Object.entries(config.fields).forEach(([fieldKey, entryId]) => {
    if (data[fieldKey] !== undefined) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = entryId;
      input.value = data[fieldKey];
      form.appendChild(input);
    }
  });

  document.body.appendChild(form);

  return new Promise<void>((resolve) => {
    let resolved = false;

    iframe.onload = () => {
      if (!resolved) {
        resolved = true;
        cleanup();
        resolve();
      }
    };

    const cleanup = () => {
      setTimeout(() => {
        try {
          document.body.removeChild(iframe);
          document.body.removeChild(form);
        } catch {}
      }, 300);
    };

    form.submit();

    setTimeout(() => {
      if (!resolved) {
        resolved = true;
        cleanup();
        resolve();
      }
    }, 4000);
  });
}
