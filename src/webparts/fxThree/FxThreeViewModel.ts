import * as ko from 'knockout';
import styles from './FxThree.module.scss';
import { IFxThreeWebPartProps } from './FxThreeWebPart';

export interface IFxThreeBindingContext extends IFxThreeWebPartProps {
  shouter: KnockoutSubscribable<{}>;
}

export default class FxThreeViewModel {
  public description: KnockoutObservable<string> = ko.observable('');

  public fxThreeClass: string = styles.fxThree;
  public containerClass: string = styles.container;
  public rowClass: string = styles.row;
  public columnClass: string = styles.column;
  public titleClass: string = styles.title;
  public subTitleClass: string = styles.subTitle;
  public descriptionClass: string = styles.description;
  public buttonClass: string = styles.button;
  public labelClass: string = styles.label;

  constructor(bindings: IFxThreeBindingContext) {
    this.description(bindings.description);

    // When web part description is updated, change this view model's description.
    bindings.shouter.subscribe((value: string) => {
      this.description(value);
    }, this, 'description');
  }
}
