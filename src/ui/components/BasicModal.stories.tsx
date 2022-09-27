import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Typography } from '../primitives/Typography';
import { BasicModal, BasicModalProps } from './BasicModal';
import { Button } from './Button';

export default {
  title: 'Components/BasicModal',
  component: BasicModal,
} as Meta;

const Template: Story<BasicModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  ...props
}) => {
  const [isOpenS, setIsOpenS] = useState(true);

  return (
    <>
      <Button onClick={() => setIsOpenS(true)}>Open modal</Button>

      <BasicModal isOpen={isOpenS} setIsOpen={setIsOpenS} {...props}>
        {children || <Typography variant="h1">Modal content</Typography>}
      </BasicModal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithScrollAndCloseButton = Template.bind({});
WithScrollAndCloseButton.args = {
  withCloseButton: true,
  children: (
    <Typography variant="h1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at
      beatae blanditiis consectetur culpa dolores dolorum eaque eos error eum
      harum illo iusto labore laboriosam maiores maxime nam numquam, provident
      quaerat qui quidem, reprehenderit similique vel. Accusantium deleniti
      dolores ducimus enim et incidunt ipsam, ipsum minus neque nesciunt quod
      rerum veniam voluptate. Assumenda doloremque eos error facere fugit omnis
      qui voluptate! Aperiam assumenda cumque dolorum earum enim est facere id
      laboriosam laborum nemo nulla odio omnis quaerat, quam rerum suscipit
      tempora vitae. Aperiam, aut debitis deserunt dicta dolore eius, enim est
      ex exercitationem fuga iure iusto magnam, magni molestiae non nulla
      obcaecati officiis possimus quasi qui saepe sapiente tempore ut! Accusamus
      accusantium amet architecto consequatur dolor eos eum fugiat, id iure
      laudantium libero mollitia neque nesciunt, nulla numquam obcaecati odit
      omnis optio praesentium quae quaerat quam quas quo recusandae repudiandae
      totam voluptatem! Aperiam commodi corporis doloribus est id ipsam
      laboriosam perferendis quae quam reiciendis, rerum sed totam veniam. Ab
      accusamus accusantium aliquid, assumenda aut blanditiis consequatur,
      dolore doloremque eaque earum error est explicabo fugit impedit ipsa iste
      maiores minima minus molestiae nostrum odio optio perferendis perspiciatis
      quaerat quas reiciendis repellat repudiandae sunt tenetur totam ullam vel
      veniam, voluptatem. Aliquam animi aspernatur cupiditate debitis distinctio
      ducimus error esse magni nihil quis recusandae, sunt vel voluptatum.
      Delectus, deserunt distinctio eos itaque nam nihil porro, praesentium quae
      quibusdam repudiandae similique totam vitae voluptates. Aliquid aspernatur
      assumenda beatae dignissimos dolores earum enim eos eum facere ipsam
      labore libero, natus nobis officia omnis quasi sed sequi ullam voluptate
      voluptates. Ab accusamus adipisci aliquid architecto asperiores at aut
      beatae, commodi cumque delectus dicta dignissimos ex excepturi facilis
      fugiat hic id inventore ipsa natus nihil numquam perferendis placeat porro
      possimus provident quaerat quas quasi quod quos recusandae rem repudiandae
      saepe sapiente soluta suscipit tempora veniam! A aperiam dignissimos
      dolorem doloribus ea earum, ex excepturi harum illum itaque iure labore
      laborum laudantium natus neque nesciunt nisi, nulla, obcaecati odit optio
      provident quasi quia quis quod ratione rem vero. Alias assumenda aut
      debitis eveniet exercitationem fugiat hic nobis officia, quam temporibus!
      Adipisci earum, facilis fugiat illum laborum, magnam nesciunt porro
      provident quas quasi recusandae repellendus, sint veniam! Ab animi autem
      doloribus iste laboriosam maxime omnis quas, tenetur! Aperiam asperiores
      assumenda, atque autem cum cumque deserunt, doloribus, minima officiis
      quaerat saepe tempore temporibus voluptas! A, eos id labore laborum libero
      molestiae nam nulla optio pariatur perferendis quod tenetur ut voluptate?
      Accusantium, at cum cumque dignissimos earum exercitationem incidunt
      nesciunt optio quod reprehenderit rerum sapiente sint soluta tempore,
      voluptates? Aut cum doloribus harum soluta veritatis voluptate
      voluptatibus. Adipisci assumenda autem dolore dolorum hic nisi quas? Ab
      accusamus architecto at consectetur consequatur dicta eaque, enim, est et
      fugiat harum ipsum itaque, labore laudantium nobis nulla provident sequi
      temporibus ullam voluptatum. Alias consequuntur eos, ipsum iusto labore
      non repudiandae vero? Assumenda laborum magni maxime modi quae. Ex illum
      iure placeat quia reprehenderit tempore! Ab ad aspernatur blanditiis
      consequatur cum, dolores ea enim eos ex harum iste iure laboriosam libero
      neque quae tempora vel!
    </Typography>
  ),
};
