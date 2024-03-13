import { MessageProps } from './src/types/types';
import { actionGenerate } from './src/helpers/figma/actionGenerate';

figma.showUI(__html__, {
  width: 340,
  height: 292,
  title: "Radix UI Colors",
});

figma.ui.onmessage = (message: MessageProps) => {
  if (message.type === "action-generate") {
    actionGenerate(message.formDataObject);

  } else if (message.type === "action-exit") {
    figma.closePlugin("Canceled. Bye! 👋🏽");
  }
};
