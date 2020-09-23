import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Emoji} from '../../shared/utils/emoji';
export const EMOJI_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmojiPickerComponent),
  multi: true
};

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss'],
  providers: [Emoji, EMOJI_PICKER_VALUE_ACCESSOR]

})
export class EmojiPickerComponent  implements ControlValueAccessor {

  emojiArr = [];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  _content: string;
  _onChanged: any;
  _onTouched: any;

  constructor(emojiProvider: Emoji) {
    this.emojiArr = emojiProvider.getEmojis();
  }

  writeValue(obj: any): void {
    this._content = obj;
  }

  registerOnChange(fn: any): void {
    this._onChanged = fn;
    this.setValue(this._content);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setValue(val: any): any {
    this._content += val;
    if (this._content) {
      this._onChanged(this._content);
    }
  }

}
