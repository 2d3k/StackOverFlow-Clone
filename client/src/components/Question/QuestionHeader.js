import styled from 'styled-components';
import { BlueButton } from '../Common/BlueButton';
import { useSelector } from 'react-redux';

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0 0 8px 0;
    font-size: 27px;
    color: var(--black-700);
  }

  // Mobile
  @media screen and (max-width: 640px) {
    flex-direction: column-reverse;
    align-items: flex-end;

    h1 {
      font-size: 22.8462px;
      width: 100%;
    }
  }
`;

const AskQuestionButton = styled(BlueButton)`
  margin-left: 12px;
  min-width: 100.115px;

  // Mobile
  @media screen and (max-width: 640px) {
    margin: 0 0 22.4px 0;
  }
`;

const Detail = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 8px;
  border-bottom: 1px solid lightgray;
  li {
    margin-bottom: 8px;
    font-size: 13px;
  }
  li:not(:last-of-type) {
    margin-right: 16px;
  }
  span {
    margin-right: 5px;
    color: var(--fc-light);
  }

  // Mobile
  @media screen and (max-width: 640px) {
    li {
      font-size: 11px;
    }
  }
`;

export const QuestionHeader = () => {
  let question = useSelector((state) => state.questionReducer);

  return (
    <>
      <Title>
        <h1>{question.title}</h1>
        <AskQuestionButton>
          <a href="/questions/ask">Ask Question</a>
        </AskQuestionButton>
      </Title>
      <Detail>
        <li>
          <span>Asked</span>
          today
        </li>
        <li>
          <span>Modified</span>
          today
        </li>
        <li>
          <span>Viewed</span>
          11 times
        </li>
      </Detail>
    </>
  );
};