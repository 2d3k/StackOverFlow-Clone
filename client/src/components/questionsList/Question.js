import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tags } from '../Common/Tags';

export const Question = (type) => {
  let questions = useSelector((state) => state.questionsReducer);

  return (
    <div className="questions">
      <div className="post-summury">
        <div>{questions[type.idx].vote} votes</div>
        <div>{questions[type.idx].comments.length} answers</div>
        <div>0 views</div>
      </div>
      <div className="question-list">
        <h2 className="question-title">
          {/* /questions/id */}
          <Link to={`/questions/${questions[type.idx].article_id}`}>
            {/* How to prevent 2 objects from splitting on top of another */}
            {questions[type.idx].title}
          </Link>
        </h2>
        <div className="question-content">
          {/* Hello so Im creating a game (since i recently started studying
          javascript). The game is Asteroids the code is basically the same
          as freeCodeCamp video only some differences are the scoring system
          ... */}
          {questions[type.idx].content}
        </div>
        <div className="question-information">
          <Tags>
            {questions[type.idx].tags.map((tag, idx) => (
              <li key={idx}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">{tag}</a>
              </li>
            ))}
          </Tags>
          <div className="question__avatar--wrapper">
            <img
              src="https://via.placeholder.com/32"
              alt="user-thumbnail"
              className="discussion__avatar--image"
            />

            {`${questions[type.idx].email} asked ${
              questions[type.idx].create_at
            }`}
          </div>
        </div>
      </div>
    </div>
  );
};
