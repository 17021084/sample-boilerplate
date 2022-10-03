import styled from 'styled-components'
import { Calendar } from 'rsuite'

export const WrapperCalendar = styled(Calendar)`
  min-width: 100px;
  width: 100%;
  border: 1px solid  ${props => props.theme.colors.background};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0;
  @media screen and (max-width: 992px) {
    margin: 0;
  }
  .rs-calendar-header {
    padding: 0;
    .rs-calendar-header-month-toolbar {
      display: flex;
      justify-content: space-between;
      width: 100% !important;
      span {
        width: 100%;
      }
    }
    button {
      display: none;
    }
  }

  .rs-calendar-view {
    padding: unset;
    .rs-calendar-table-cell {
      font-size: 10px;
      text-align: center;
      width: auto
      width: 0;
      padding: 0;
      .rs-calendar-table-cell-content {
        height: 20px;
        padding: 0;
        position: relative;
        border: none;
        .rs-badge-dot {
          width: 4px;
          height: 4px;
          position: absolute;
          right: 50%;
          top: auto;
        }
        .rs-badge-independent {
          background:  ${props => props.theme.colors.calendar[0]};
        }
      }
    }
    .rs-calendar-table-cell-selected {
      .rs-calendar-table-cell-content {
        background:  ${props => props.theme.colors.background};
        border-radius: 5px;
        margin: 2px;
      }
      .rs-calendar-table-cell-day {
        background: transparent;
        color:  ${props => props.theme.colors.primary};
      }
    }

    .rs-calendar-table-cell-is-today {
      .rs-calendar-table-cell-content {
        background: ${props => props.theme.colors.background};
        border-radius: 5px;
        padding: 2px;
      }
      .rs-calendar-table-cell-day {
        background: transparent;
        color:  ${props => props.theme.colors.primary};
      }
    }
    .rs-calendar-table-row:not(.rs-calendar-table-header-row) {
      .rs-calendar-table-cell-content {
        height: 30px;
      }
    }
  }
  .calendar-todo-item-badge-seen {
    background: #b7bbcb !important;
  }
  .calendar-todo-item-badge {
    background: ${props => props.theme.colors.primary} !important;
  }
`
