export type CardAnnotationCondition = {
  value: string;
  not: boolean;
};

export const cardAnnotationConditionEmpty = (): CardAnnotationCondition => {
  return {
    value: "",
    not: false,
  };
};
