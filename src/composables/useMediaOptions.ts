import {computed, type Ref} from "vue";
import type {AuthPayload, MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";

/**
 * ✅ Helper function to validate authentication payload
 */
function isValidAuthPayload(value: any): value is AuthPayload {
  if (!value || typeof value !== "object") {
    throw new Error("Invalid auth payload: Must be an object.");
  }

  if (!["csrf", "jwt", "hmac"].includes(value.type)) {
    throw new Error(`Invalid auth type: ${value.type}. Must be one of: "csrf", "jwt", "hmac".`);
  }

  try {
    const headers = JSON.parse(JSON.stringify(value.headers)); // Ensure headers is an object

    switch (value.type) {
      case "hmac":
        if (!((headers["X-User-HMAC"] && headers["X-User-Email"]) || (headers["X-User-HMAC"] && headers["X-User-Session"]))) {
          throw new Error("Invalid HMAC headers: Must include 'X-User-HMAC' and either 'X-User-Email' or 'X-User-Session'.");
        }
        break;

      case "jwt":
        if (!headers["Authorization"]) {
          throw new Error("Invalid JWT headers: Must include 'Authorization'.");
        }
        break;

      case "csrf":
        if (!headers["X-CSRFToken"]) {
          throw new Error("Invalid CSRF headers: Must include 'X-CSRFToken'.");
        }
        break;
    }

    return true;
  } catch (error) {
    throw new Error(`Invalid headers format: ${error}`);
  }
}

export function useMediaOptions(optionsProp: Ref<MediaLibraryServiceOptions | string>) {
  /**
   * ✅ Ensure `parsedOptions` is always valid
   */
  const parsedOptions = computed<MediaLibraryServiceOptions>(() => {
    if (typeof optionsProp.value === "string") {
      try {
        return JSON.parse(optionsProp.value) as MediaLibraryServiceOptions;
      } catch (error) {
        throw new Error("Invalid JSON format for options: " + error);
      }
    }
    return optionsProp.value as MediaLibraryServiceOptions;
  });

  /**
   * ✅ Ensure `baseUrl` exists (throws an error if missing)
   */
  if (!parsedOptions.value.baseUrl) {
    throw new Error("Missing 'baseUrl' in media options. This field is required.");
  }

  /**
   * ✅ Ensure `auth` is valid (throws an error if missing or invalid)
   */
  if (!parsedOptions.value.auth) {
    throw new Error("Missing auth configuration in media options.");
  }

  isValidAuthPayload(parsedOptions.value.auth); // Throws if invalid

  return {
    parsedOptions,
  };
}
