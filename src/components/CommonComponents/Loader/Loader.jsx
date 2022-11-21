import { ThreeDots } from  'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.box}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="rgb(76, 75, 75)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
		  />
    </div>
  );
}
