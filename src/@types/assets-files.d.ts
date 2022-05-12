declare module '@assets/images/*.jpg' {
  import { ImageRequireSource } from 'react-native';
  const content: ImageRequireSource;
  export default content;
}

declare module '@assets/images/*.png' {
  import { ImageRequireSource } from 'react-native';
  const content: ImageRequireSource;
  export default content;
}
