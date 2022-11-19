import propTypes from "prop-types";
import styles from "./Button.module.css";
// 해당 css 코드를 object로 만들어줌. 그래서 styles 오브젝트 안의 btn을 가지고 온다!고 생각하자
// 고로 동일한 class 이름을, btn 스타일을 다른파일 내에서도 사용가능함! css파일을 더 만들지 않고도!!

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: propTypes.string,
};
export default Button;
