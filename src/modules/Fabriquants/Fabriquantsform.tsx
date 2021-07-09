import React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const validateMessages = {
  required : 'Le champ est obligatoire.',
}

const Fabriquantsform = () => {
  const [form] = Form.useForm();

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {};

  return(
    <>
      <Form
      layout={'vertical'}
      form={form}
      initialValues={{ layout: 'vertical'}}
      onValuesChange={onFormLayoutChange}
      validateMessages={validateMessages}>
        <Row>
          <Col span={16}>
            <Row gutter={4}>
              <Col span={12}>
                <Form.Item label="Code TECCOM">
                  <Input placeholder="Code TECCOM"/>
                </Form.Item>
                </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row gutter={4}>
              <Col span={12}>
                <Form.Item label="Libellé" name='libelle' rules={[{ required: true }]}>
                  <Input placeholder="Libellé"/>
                </Form.Item>
              </Col> 
            </Row>
          </Col>
        </Row>
        <Row gutter={4}>
          <Col span={24} >
            <Form.Item>
              <Button 
              type="primary" 
              htmlType="submit"
              onClick={() => alert('Envoi du formulaire')}
              >
                Valider
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>  
  )
};

export default Fabriquantsform;