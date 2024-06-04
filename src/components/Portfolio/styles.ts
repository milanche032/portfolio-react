import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
  }
  .more-projects {
    margin-top: 3rem;
    font-size: 3rem;
    font-weight: 700;
    color: var(--green);
    text-align: center
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    padding-bottom: 50px;
    overflow: hidden;
    .wordps {
      position: relative;
      height: 100%;
      padding-bottom: 30px;
      .bg1 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;height: unset;
        z-index: 28;
        padding-bottom: 50px;
      }
     
      .bg2 {
        position: absolute;
        top: 15px;
        left: 0;
        right: 0;height: unset;
        z-index: 29;
        padding-bottom: 50px;
      }
      .main {
        position: absolute;
        top: 30px;
        z-index: 30;
        left: 0;
        right: 0;
        height: unset;
        header {
          margin-bottom: 1.6rem;
        }
        p {
          margin-bottom: 1rem;
        }
        footer{
          margin-top: 1rem;
        }
      }
    }
    .wordps:hover {
      transform: translate(0px,10px);
      .bg1 {
        transform: rotate(-2deg) translate(1px,-10px) skew(-6deg,0deg);
      }
      .bg2 {
        transform: rotate(1deg) translate(-1px,-10px) skew(6deg,0deg);
      }
      .main {
        transform: translate(0px,5px) scale(1.02);
        svg {
          g {
            fill: #fff;
          }
        }
      }

    }

    .project{
      padding: 2rem 1.8rem;
      outline: 5px solid #474747;
      width: 100%;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1.7rem;
        }
        a {
          transition: all cubic-bezier(0.68, -0.55, 0.27, 01.55) 250ms;
        }
        a > svg {
          width: 2rem;
          height: auto
        }
        a > svg path {
              fill: #fff;
        }
        a:hover {
          transform: scale(1.1);
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        font-weight: 500;
        margin-bottom: 2rem;
        span {
          font-size: 4rem;
        }
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
      .wordps {
        min-height: 415px;
        
      }
    }
  }
`