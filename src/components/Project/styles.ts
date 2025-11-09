import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
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
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
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
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    h2{
      font-size: 3.5rem;
    }
  }

  @media (max-width: 740px){
    padding: 0 2rem;
    
    .projects{
      grid-template-columns: 1fr;
      padding: 0;
    }

    h2{
      font-size: 3rem;
    }
  }

  @media (max-width: 480px){
    padding: 0 1.5rem;
    
    h2{
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .projects{
      .project{
        padding: 1.5rem 1.5rem;

        header{
          margin-bottom: 2rem;
          
          svg{
            width: 40px;
          }

          a > img {
            width: 4rem;
          }
        }

        h3{
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        p{
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
        }

        footer{
          .tech-list{
            gap: 1rem;
            font-size: 1.2rem;
            flex-wrap: wrap;
          }
        }
      }
    }
  }
`