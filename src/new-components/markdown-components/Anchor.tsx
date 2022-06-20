import React from 'react';
import { Link, Pressable } from 'native-base';
export const Anchor = (props: any) => {
  return (
    <Pressable>
      {({ isHovered }) => {
        return (
          <Link
            _text={{
              _light: {
                color: 'primary.600',
              },
              _dark: {
                color: 'primary.500',
              },
              textDecorationLine: isHovered ? 'underline' : 'none',
            }}
            href={props.href}
            {...props}
          >
            {props.children}
          </Link>
        );
      }}
    </Pressable>
  );
};
