import cx from "classnames";
import styles from "./Button.module.css";
const Button = ({
  onClick,
  children,
  variant,
  label,
  size,
  disabledClassName,
  disabled,
}: any) => {
  const text = () => {
    if (label) return label;
    if (children) return children;

    return "Button";
  };

  const handleEvent = (event: any) => {
    if (disabled) return;
    onClick && onClick(event);
  };

  const _className = cx(styles.button, styles[variant], styles[size], {
    [styles.disabled]: disabled,
    [disabledClassName]: disabled,
  });

  return (
    <button onClick={handleEvent} className={_className}>
      {text()}
    </button>
  );
};

export default Button;
