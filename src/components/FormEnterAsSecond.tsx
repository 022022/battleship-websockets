import { uiTextsRu } from '../uiTexts/ru';

export function EnterAsSecond() {
  return <form>
    <input type='text' placeholder={uiTextsRu.enterYourName}/>
    <input type='text' placeholder={uiTextsRu.enterAccessCode}/>
    <button>{uiTextsRu.enterGame}</button>
  </form>
}