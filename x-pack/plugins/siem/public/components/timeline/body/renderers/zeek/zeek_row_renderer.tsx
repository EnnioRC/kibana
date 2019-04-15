/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { get } from 'lodash/fp';
import React from 'react';

import { Row, RowRenderer, RowRendererContainer } from '..';

import { ZeekDetails } from '.';

export const zeekRowRenderer: RowRenderer = {
  isInstance: ecs => {
    const module: string | null = get('event.module', ecs);
    return module != null && module.toLowerCase() === 'zeek';
  },
  renderRow: ({ browserFields, data, width, children }) => (
    <Row>
      {children}
      <RowRendererContainer width={width}>
        <ZeekDetails data={data} browserFields={browserFields} />
      </RowRendererContainer>
    </Row>
  ),
};