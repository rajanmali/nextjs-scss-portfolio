import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

// Styles
import { ScorllToTopBtnWrapper } from './ScrollToTopBtn.styles';

interface ScrollToTopButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ScorllToTopBtn = ({ onClick }: ScrollToTopButtonProps) => {
  return (
    <ScorllToTopBtnWrapper onClick={onClick}>
      <IconContext.Provider
        value={{
          color: '#888',
          size: '2em',
        }}
      >
        <BsFillArrowUpCircleFill className="scroll-to-top__btn" />
      </IconContext.Provider>
    </ScorllToTopBtnWrapper>
  );
};

export default ScorllToTopBtn;
