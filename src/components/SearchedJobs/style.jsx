import styled from "styled-components";

export const SearchedList = styled.ul`
  width: 900px;
  margin-left: 60px;
  margin-top: 30px;

  li {
    width: 900px;
    height: 92px;
    display: flex;
    justify-content: space-between;
    color: #383838;
    .info_left {
      display: flex;
      flex-direction: column;
      width: 800px;

      .company_name {
        font-size: 14px;
        margin-bottom: 4px;
        font-weight: 600;
      }
      .flex_wrapper {
        width: 650px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        .job_salary {
          width: 120px;
        }
        .experience {
          width: 90px;
          font-size: 14px;
        }
      }
      .job_tag {
        height: 20px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 300px;
        font-size: 14px;
        color: #8a8a8a;
      }
      .job_title {
        display: block;
        font-size: 16px;
        color: #00d3ab;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 400px;
      }
    }
    .info_right {
      margin-top: 8px;
      display: flex;
      justify-content: right;
      flex-direction: column;
      width: 300px;
      h4 + h4 {
        margin-bottom: 4px;
      }
      div {
        .pick_btn {
          vertical-align: middle;
          margin-left: 8px;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }

      .loc {
        display: flex;
        align-items: center;
        gap: 8px;

        h4 {
          margin: 0;
        }
      }

      img {
      }
    }
  }
  li + li {
    margin: 24px 0;
  }

  .job_salary {
    font-size: 14px;
  }

  .hi {
    font-size: 14px;
  }
`;
