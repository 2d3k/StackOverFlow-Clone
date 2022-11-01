import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Tags } from '../Common/Tags';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deleteQuestion } from '../../redux/actions/questionsAction';

export const Block = styled.div`
  padding-right: 16px;
`;

export const Body = styled.div`
  p {
    margin: 0 0 16.5px 0;
    font-size: 15px;
  }
  pre {
    margin: 0;
    padding: 12px;
    background-color: #f6f6f6;
    font-size: 13px;
    border-radius: 5px;
  }
`;

export const QuestionTags = styled(Tags)`
  margin: 24px 0 25px 0;
`;

export const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 16px 0;
  padding-top: 4px;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

export const PostMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1 auto;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;

  margin: 4px 16px 4px 0;
  margin-right: 16px;

  li {
    margin: 0 4px;
    font-size: 13px;
    color: var(--black-500);
    height: 1rem;
    cursor: pointer;

    &:hover,
    &:active {
      color: var(--black-400);
    }

    button {
      color: var(--black-500);

      &:hover,
      &:active {
        color: var(--black-400);
      }
    }
  }

  /* .delete-button {
    button {
      color: var(--red-500);
      &:active,
      &:hover {
        color: var(--red-400);
      }
    }
  } */

  h6 {
    font-size: 11px;
  }

  // Mobile
  @media screen and (max-width: 640px) {
    li {
      font-size: 11px;
    }
  }
`;

export const PostUser = styled.ul`
  width: 200px;
  margin: 4px 0;
  padding: 5px 6px 7px 7px;
  background: ${(props) => props.background && props.background};
  border-radius: 3px;

  h5 {
    margin: 1px 0 4px 0;
    color: var(--black-500);
    font-size: 12px;
  }
`;

export const UserInfo = styled.div`
  display: flex;

  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  > div {
    margin-left: 8px;
  }
  > div {
    margin-left: 8px;

    h6 {
      color: var(--theme-link-color);
      font-size: 13px;
      cursor: pointer;

      &:hover,
      &:active {
        color: var(--theme-link-color-hover);
      }
    }

    ul {
      display: flex;
      li:first-of-type {
        margin-left: 2px;
        font-weight: bold;
        font-size: 12px;
        color: var(--black-500);
      }
      li:not(:first-of-type) {
        margin: 0px 3px 0 2px;
        font-size: 12px;
        color: var(--black-400);
      }
    }
  }

  // Mobile
  @media screen and (max-width: 640px) {
    > div {
      h6 {
        font-size: 11px;
      }
    }
  }
`;

export const Badge = styled.span`
  display: inline-block;
  margin: 0px 3px 0 2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const QuestionContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  let question = useSelector((state) => state.questionReducer);

  const handelDeleteQuestion = () => {
    console.log('DELETE QUESTION');
    dispatch(deleteQuestion(id));
    navigate('/');
  };

  return (
    <Block>
      <Body>
        <p>{question.content}</p>
        {/* <pre>
          <code></code>
        </pre> */}
      </Body>
      <QuestionTags>
        {question.tags.map((tag, idx) => (
          <li key={idx}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">{tag}</a>
          </li>
        ))}
      </QuestionTags>
      <Detail>
        <PostMenu>
          {/* other */}
          {/* <li>Share</li>
          <li>
            <Link to={`/questions/edit/${id}`}>Edit</Link>
          </li>
          <li>Follow</li> */}
          {/* my */}
          <li>Share</li>
          <li>
            <Link to={`/questions/edit/${id}`}>Edit</Link>
          </li>
          <li>
            <button onClick={handelDeleteQuestion}>Delete</button>
          </li>
          <li>Flag</li>
        </PostMenu>
        <PostUser background="#D9EAF7">
          <h5>{question.create_at}</h5>
          <UserInfo>
            <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
            <div>
              <h6>{question.email}</h6>
              <ul>
                <li>156</li>
                <li>
                  <Badge color="#D1A684" />
                  27
                </li>
              </ul>
            </div>
          </UserInfo>
        </PostUser>
      </Detail>
    </Block>
  );
};
