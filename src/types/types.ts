type FormDataProps = {
  colorName: string;
  colorType: "solid" | "alpha";
  colorTheme: "light" | "dark";
};

type MessageProps = {
  type: string;
  formDataObject: FormDataProps;
};

export { FormDataProps, MessageProps }