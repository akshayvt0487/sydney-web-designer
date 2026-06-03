import "server-only";

interface GoogleSheetPayload {
  [key: string]: unknown;
}

export interface GoogleSheetResponse {
  success?: boolean;
  error?: string;
  code?: string;
  tab?: string;
  message?: string;
  duplicate?: boolean;
  resumeUrl?: string;
  coverLetterUrl?: string;
}

export async function saveToGoogleSheets(
  payload: GoogleSheetPayload,
  timeoutMs = 12000
): Promise<GoogleSheetResponse> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    throw new Error("Google Sheets webhook is not configured.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        ...payload,
        secret: webhookSecret,
      }),
      cache: "no-store",
      signal: controller.signal,
    });

    const text = await response.text();

    let result: GoogleSheetResponse;

    try {
      result = JSON.parse(text) as GoogleSheetResponse;
    } catch {
      throw new Error("Google Sheets returned an invalid response.");
    }

    if (!response.ok || !result.success) {
      const error = new Error(
        result.error || "Failed to save submission to Google Sheets."
      ) as Error & { code?: string };

      error.code = result.code;
      throw error;
    }

    return result;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(
        "The submission took too long to process. Please try again."
      );
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}