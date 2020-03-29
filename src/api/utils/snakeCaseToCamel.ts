export const snakeCaseToCamel = (obj: Record<string, any>) => {
  type valueType = string | Record<string, any>[] | Record<string, any>;

  const processVal = (val: valueType): valueType => {
    if (typeof val !== "object" || val === null || val === undefined) {
      return val;
    }

    if (Array.isArray(val)) {
      return val.map(processVal);
    }

    return snakeCaseToCamel(val);
  };

  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [
      key.replace(/_(.)/g, (segment) => segment[1].toUpperCase()),
      processVal(val),
    ]),
  );
};
