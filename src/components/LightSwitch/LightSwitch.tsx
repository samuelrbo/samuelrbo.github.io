import { LayoutContext, LayoutContextProps } from 'components/layout';
import { ChangeEvent, useContext } from 'react';

export default () => {
  const { setTheme } = useContext<LayoutContextProps>(LayoutContext);

  return (
    <div className='light-switch-container'>
      <input
        type='checkbox'
        id='light-switch'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTheme(e.target.checked ? 'light' : 'dark')
        }
      />
      <label htmlFor='light-switch' id='light-switch-label'>
        <div className='screw'></div>
        <div className='switch'></div>
        <div className='screw'></div>
      </label>
      <div id='background'></div>
    </div>
  );
};
