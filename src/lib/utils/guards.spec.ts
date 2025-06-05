import { isObject, isPromise, isSdk, checkSdk, evaluateSdk } from "./guards";

const mockSdk = {
  components: () => {},
  grantPayment: () => {},
};

describe("guards", () => {
  describe("isObject", () => {
    it("returns true for plain objects", () => {
      expect(isObject({})).toBe(true);
    });
    it("returns true for arrays", () => {
      expect(isObject([])).toBe(true);
    });
    it("returns false for null", () => {
      expect(isObject(null)).toBe(false);
    });
    it("returns false for primitives", () => {
      expect(isObject(42)).toBe(false);
      expect(isObject("str")).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject(true)).toBe(false);
    });
  });

  describe("isPromise", () => {
    it("returns true for native Promise", () => {
      expect(isPromise(Promise.resolve())).toBe(true);
    });
    it("returns true for thenable objects", () => {
      expect(isPromise({ then: () => {} })).toBe(true);
    });
    it("returns false for non-promises", () => {
      expect(isPromise({})).toBe(false);
      expect(isPromise(null)).toBe(false);
      expect(isPromise(123)).toBe(false);
    });
  });

  describe("isSdk", () => {
    it("returns true for valid Sdk object", () => {
      expect(isSdk(mockSdk)).toBe(true);
    });
    it("returns false for missing methods", () => {
      expect(isSdk({})).toBe(false);
      expect(isSdk({ components: () => {} })).toBe(false);
      expect(isSdk({ grantPayment: () => {} })).toBe(false);
    });
    it("returns false for null or primitives", () => {
      expect(isSdk(null)).toBe(false);
      expect(isSdk(42)).toBe(false);
    });
  });

  describe("checkSdk", () => {
    it("returns null for null", () => {
      expect(checkSdk(null)).toBeNull();
    });
    it("returns Sdk for valid Sdk", () => {
      expect(checkSdk(mockSdk)).toBe(mockSdk);
    });
    it("throws for invalid Sdk", () => {
      expect(() => checkSdk({})).toThrow("Cannot load the SDK!");
      expect(() => checkSdk(42)).toThrow("Cannot load the SDK!");
    });
  });

  describe("evaluateSdk", () => {
    it('returns {is: "none"} for null', () => {
      expect(evaluateSdk(null)).toEqual({ is: "none", sdk: null });
    });
    it('returns {is: "sync"} for valid Sdk', () => {
      expect(evaluateSdk(mockSdk)).toEqual({ is: "sync", sdk: mockSdk });
    });
    it('returns {is: "async"} for Promise<Sdk>', async () => {
      const result = evaluateSdk(Promise.resolve(mockSdk));
      expect(result.is).toBe("async");
      if (result.is === "async") {
        await expect(result.sdkPromise).resolves.toBe(mockSdk);
      }
    });
    it('returns {is: "async"} for thenable that resolves to null', async () => {
      const result = evaluateSdk(Promise.resolve(null));
      expect(result.is).toBe("async");
      if (result.is === "async") {
        await expect(result.sdkPromise).resolves.toBeNull();
      }
    });
    it("async throws for thenable that resolves to invalid", async () => {
      const result = evaluateSdk(Promise.resolve({}));
      expect(result.is).toBe("async");
      if (result.is === "async") {
        await expect(result.sdkPromise).rejects.toThrow("Cannot load the SDK!");
      }
    });
  });
});
