import { BASE_PAGE_TITLE } from '../constants';

export class TitleHelper {
  static setTitle(title: string) {
    document.title =
      title !== BASE_PAGE_TITLE
        ? `${title} | ${BASE_PAGE_TITLE}`
        : BASE_PAGE_TITLE;
  }
}
