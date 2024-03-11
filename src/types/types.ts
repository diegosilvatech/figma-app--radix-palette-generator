type FormDataProps = {
  colorName: string;
  colorType: "solid" | "alpha";
  themeColor: "light" | "dark";
};

type MessageProps = {
  type: string;
  formDataObject: FormDataProps;
};

export { FormDataProps, MessageProps }