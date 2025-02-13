import styled from 'styled-components'
import { theme } from '~/styles/theme'

type CardProps = {
  forValues?: boolean
}

export const Container = styled.div`
  max-width: 1024px;
  margin: ${theme.spacing.m} auto;
  width: 100%;
  padding: 20px;
  height: calc(100vh - ${theme.header.size.default});
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${theme.screenSize.mobile}) {
    margin: 0 auto;
  }
`

export const Title = styled.h2`
  font-size: ${theme.font.heading.size.xl};
  margin-bottom: ${theme.spacing.m};
`

export const Card = styled.div<CardProps>`
  border-radius: 8px;
  box-shadow: 0px 14px 64px rgba(31, 45, 39, 0.16);
  padding: ${theme.spacing.s};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.s};

  & + & {
    margin-top: ${theme.spacing.l};
  }

  ${({ forValues }) => {
    if (forValues) {
      return `
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;

          @media (min-width: ${theme.screenSize.mobile}) {
            flex-direction: row;
            text-align: left;
          }
      `
    }
  }}
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.s};

  @media (min-width: ${theme.screenSize.mobile}) {
    flex-direction: row;
  }
`
