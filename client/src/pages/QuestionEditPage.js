import { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { EditWidget } from '../components/Home/SidebarWidget/EditWidget';

//써머노트 install 명령어 "npm install summernote"

export const QuestionEditPage = () => {
  //질문 작성 공간 글 하단에 똑같이 보여지는 기능
  const [useWrite, setUseWrite] = useState('');
  const userWriteFunction = (e) => {
    setUseWrite(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <Top>
        <Header />
        <HeaderMargin></HeaderMargin>
        <Wrapper>
          <AsWrapper>
            <AskImg>
              <AskTitle>Ask public Question </AskTitle>
              <AskTop></AskTop>
            </AskImg>
            <MainContents>
              <ContentsUserWrite>
                <Box>
                  <AskText1>Title</AskText1>
                  <AskText2>
                    Be specific and imagine you’re asking a question to another
                    person
                  </AskText2>
                  <TitleInput
                    type="text"
                    className="TitleInput"
                    placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                    onChange={(e) => userWriteFunction(e)}
                  />
                </Box>
                <Box>
                  <AskText1>Body</AskText1>
                  <AskText2>
                    Include all the information someone would need to answer
                    your question
                  </AskText2>
                  <SummerNotePreview>
                    써머노트 텍스트박스 구간
                  </SummerNotePreview>
                  <div>텍스트박스 밑 버튼?</div>
                </Box>
                <Userwrite>{useWrite}</Userwrite>
                <Box>
                  <AskText1>Tags</AskText1>
                  <AskText2>
                    Add up to 5 tags to describe what your question is about
                  </AskText2>
                  <TitleInput
                    type="text"
                    className="TitleInput"
                    placeholder="e.g (c linux r)"
                  />
                </Box>
              </ContentsUserWrite>
              <ContentsUserHelp>
                <EditWidget />
              </ContentsUserHelp>
            </MainContents>
            <Reviewbutton
            // onClick={클릭 함수 추가구간}
            >
              Post your answer
            </Reviewbutton>
          </AsWrapper>
        </Wrapper>
      </Top>
      <Footer></Footer>
    </div>
  );
};

//스타일드 컴포넌트 (나중에 컴포넌트로 이동하기)
const Top = styled.div`
  background-color: rgb(242, 242, 243);
  display: flex;
  flex-flow: column wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 24px 24px;
`;

const AsWrapper = styled.div`
  width: 100%;
`;

const AskTop = styled.div`
  width: 600px;
  height: 130.34px;
  background: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
  background-repeat: no-repeat;
`;

const AskImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AskTitle = styled.div`
  width: 400px;
  height: 100px;
  font-size: 27px;
  font-weight: 650;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const MainContents = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: space-between;
  /* border: 5px solid red; */
`;

const ContentsUserWrite = styled.div`
  width: 827px;
  padding: 16px 16px 16px 16px;
  /* border: 1px solid red; */
  background-color: #ffffff;
  border-radius: 0.8%;
  box-shadow: 0px 0px 4px #d6d9dc;
`;

const ContentsUserHelp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const AskText1 = styled.div`
  width: 400px;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  margin: 15px 0px 0px;
`;

const AskText2 = styled.div`
  width: 600px;
  height: 100%;
  font-size: 12px;
  /* border: solid pink; */
  display: flex;
  justify-content: left;
  align-items: baseline;
  margin: 0px 0px 10px 0px;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 32.57px;
  padding: 8px 10px;
  border: 1px solid var(--bc-darker);
  border-radius: var(--br-sm);
  background-color: white;
  color: var(--fc-dark);
  font-size: 13px;
  &:focus {
    box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5);
    border: none;
    outline: 0;
  }
  border-radius: 2px;
`;

const Box = styled.div``;

const Reviewbutton = styled.button`
  width: 154px;
  height: 40px;
  background-color: #0a95ff;
  border: solid #0a95ff;
  font-size: 14px;
  color: white;
  /* border: 1px solid green; */
  margin-top: 20px;
  margin-bottom: 50px;

  border-radius: 4px;
  /* box-shadow: 0px 0px 2px 2px rgba(107, 186, 247, 0.5); */
`;

const Userwrite = styled.div`
  font-size: 14px;
`;

const SummerNotePreview = styled.div`
  width: 100%;
  height: 300px;
  /* border: solid black 5px; */
`;
