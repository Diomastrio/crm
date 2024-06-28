import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div `
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem;
  display: flex;
  gap: 0.4rem;
  position: relative;
`;

const GraphicStyledFilter = styled(StyledFilter)`
  gap: 0rem;
  padding: 0.5rem;
`;

const HideStyledFilter = styled(StyledFilter)`
  width: 13rem
`;

const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

const SecondFilterButton = styled(FilterButton)`

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-silver-100);
      color: var(--color-blue-700);
    `}

    &:hover:not(:disabled) {
      background-color: var(--color-silver-100);
      color: var(--color-brand-50);
    }
`;

const HideFilterButton = styled(FilterButton)`

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-silver-100);
      color: var(--color-blue-700);
    `}

    &:hover:not(:disabled) {
      background-color: var(--color-silver-100);
      color: var(--color-brand-50);
    }
`;

const ThirdFilterButton = styled(FilterButton)`
  ${(props) =>
    props.active &&
    css`
      background-color:  RGB(19, 181, 231, 0.7);
      color: var(--color-blue-700);
    `}

    &:hover:not(:disabled) {
      background-color: var(--color-silver-100);
      color: var(--color-brand-50);
    }
`;

const ForthFilterButton = styled(FilterButton)`
  ${(props) =>
    props.active &&
    css`
      background-color:  RGB(19, 181, 231, 0.2);
      color: var(--color-blue-700);
    `}

    &:hover:not(:disabled) {
      background-color: var(--color-silver-100);
      color: var(--color-brand-50);
    }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

function SecondFilter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <SecondFilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </SecondFilterButton>
      ))}
    </StyledFilter>
  );
}

function ThirdFilter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <ThirdFilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </ThirdFilterButton>
      ))}
    </StyledFilter>
  );
}

function ForthFilter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <ForthFilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </ForthFilterButton>
      ))}
    </StyledFilter>
  );
}

function GraphicFilter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <GraphicStyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </GraphicStyledFilter>
  );
}

function SecondGraphicFilter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <GraphicStyledFilter>
      {options.map((option) => (
        <SecondFilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </SecondFilterButton>
      ))}
    </GraphicStyledFilter>
  );
}

function HideFilter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <HideStyledFilter>
      {options.map((option) => (
        <HideFilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </HideFilterButton>
      ))}
    </HideStyledFilter>
  );
}

export { Filter,SecondFilter,ThirdFilter, ForthFilter,GraphicFilter,SecondGraphicFilter, FiltersWrapper,HideFilter};
