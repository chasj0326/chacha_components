import { useTabProps, useTabRef } from './features/Tab';

const App = () => {
  const { select: firstSelect, getTabItemProps } =
    useTabProps();
  const { select: secondSelect, tabListRef } = useTabRef();
  return (
    <>
      <div>
        <h2>Tab1</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div {...getTabItemProps(0)}>Tab0</div>
          <div {...getTabItemProps(1)}>Tab1</div>
          <div {...getTabItemProps(2)}>Tab2</div>
          <div {...getTabItemProps(3)}>Tab3</div>
          <div {...getTabItemProps(4)}>Tab4</div>
        </div>
        <hr />
        <div>
          {
            [
              <div>Tab Screen 0</div>,
              <div>Tab Screen 1</div>,
              <div>Tab Screen 2</div>,
              <div>Tab Screen 3</div>,
              <div>Tab Screen 4</div>,
            ][firstSelect]
          }
        </div>
      </div>
      <div>
        <h2>Tab2</h2>
        <div
          ref={tabListRef}
          style={{ display: 'flex', gap: '10px' }}>
          <div>Tab0</div>
          <div>Tab1</div>
          <div>Tab2</div>
          <div>Tab3</div>
          <div>Tab4</div>
        </div>
        <hr />
        <div>
          {
            [
              <div>Tab Screen 0</div>,
              <div>Tab Screen 1</div>,
              <div>Tab Screen 2</div>,
              <div>Tab Screen 3</div>,
              <div>Tab Screen 4</div>,
            ][secondSelect]
          }
        </div>
      </div>
    </>
  );
};

export default App;
