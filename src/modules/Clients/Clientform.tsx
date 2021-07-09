import React from 'react';
import { Form, Input, Row, Col, Divider, Button } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const validateMessages = {
  required : 'Le champ est obligatoire.',
}

const Clientsform = () => {
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
                <Form.Item label="Nom">
                  <Input placeholder="Nom"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Siret">
                  <Input placeholder="Siret"/>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Divider>Adresse de Livraison</Divider>
            <Row gutter={4}>
              <Col span={12}>
                <Form.Item label="Adresse 1" name='adress1' rules={[{ required: true }]}>
                  <Input placeholder="Adresse 1"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Adresse 2">
                  <Input placeholder="Adresse 2"/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Code Postal" name='postalcode' rules={[{ required: true }]}>
                  <Input placeholder="Code Postal "/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Ville" name='city' rules={[{ required: true }]}>
                  <Input placeholder="Ville"/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Pays">
                  <Input placeholder="Pays"/>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Divider>Adresse de Facturation</Divider>
            <Row gutter={4}>
              <Col span={12}>
                <Form.Item label="Adresse 1" name='adress1' rules={[{ required: true }]}>
                  <Input placeholder="Adresse 1"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Adresse 2">
                  <Input placeholder="Adresse 2"/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Code Postal" name='postalcode' rules={[{ required: true }]}>
                  <Input placeholder="Code Postal"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Ville" name='city' rules={[{ required: true }]}>
                  <Input placeholder="Ville"/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Pays">
                  <Input placeholder="Pays"/>
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

export default Clientsform;