import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const FormLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <PageLayout>
      <PageContainer>{children}</PageContainer>
    </PageLayout>
  );
};

export default FormLayout;

const PageLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PageContainer = styled.div`
  border: 1px solid lightgray;
  text-align: center;
  padding: 50px;
  background-color: white;
`;
