const { default: styled } = require("styled-components");

const PostContainer = styled.div`
  margin-top: 4rem;

  border: solid 1px #eee;

  .post__header {
    display: flex;
    align-items: center;
    border-bottom: solid 1px #eee;
  }

  .person__name {
    display: inline-block;
  }

  .post__picture {
    width: 100%;
  }

  .post__footer {
    margin: 1rem;
  }

  .post__footer__interactions {
    display: flex;
    justify-content: space-between;
  }

  .post__footer__interactions__left {
    display: flex;
  }

  .interaction__icon {
    width: 24px;
    height: 24px;
  }

  .main__interactions {
    margin-right: 1rem;
  }

  .post__comment {
    margin-top: 0.5rem;
  }

  .post__views {
    margin-top: 1rem;
  }

  .post__comment__from {
    font-weight: bold;
    margin-right: 1rem;
  }

  .post__time {
    margin-top: 0.75rem;
    font-weight: light;
    color: grey;
  }

  .create__comment {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: solid 1px #eee;
  }

  .create__comment__content {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
    border: none;
    outline: none;
  }

  .add__comment {
    padding: 1rem;
    font-weight: bold;
    background: none;
    border: none;
    color: #0095f7;
  }
`;

export { PostContainer };
