declare interface IToastWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'ToastWebPartStrings' {
  const strings: IToastWebPartStrings;
  export = strings;
}
