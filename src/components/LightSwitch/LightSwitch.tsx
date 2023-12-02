import { LayoutContext, LayoutContextProps } from '@shared/layout/Layout';
import { LayoutTheme } from '@shared/layout/layout.enum';
import { ChangeEvent, useContext } from 'react';
import './style.css';

const LightSwitch = () => {
  const { theme, switchToTheme } =
    useContext<LayoutContextProps>(LayoutContext);

  return (
    <div className='light-switch-container'>
      <input
        type='checkbox'
        id='light-switch'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          switchToTheme(e.target.checked ? LayoutTheme.LIGHT : LayoutTheme.DARK)
        }
        checked={theme === LayoutTheme.LIGHT}
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

export default LightSwitch;
