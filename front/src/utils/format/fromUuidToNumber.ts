export const fromUuidToNumber = (id: string) => {
  return id.replace(/-/g, "").replace(/[a-z]/g, "");
};
