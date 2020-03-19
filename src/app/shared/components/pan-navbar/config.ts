import { IRegexOption } from './pan-navbar';

export class NavbarConfig {
  static regexOptions: IRegexOption[] = [
    {
      type: 'Name',
      pattern: /^[a-zA-Z\s]*$/,
    },
    {
      type: 'Customer Number',
      pattern: /^[0-9]{0,8}$/,
    },
  ];
}
