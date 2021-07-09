import React from 'react';
import { Form, Input, Row, Col, Divider, Select, Button } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const Articlesform = () => {
  const [form] = Form.useForm();

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {};


  return (
    <>
      <Form
        layout={'vertical'}
        form={form}
        initialValues={{ layout: 'vertical' }}
        onValuesChange={onFormLayoutChange}
      >
        <Row>
          <Col span={16}>
            <Row gutter={4}>
              <Col span={12} >
                <Form.Item label="Libellé">
                  <Input placeholder="Libellé"/>
                </Form.Item>
              </Col>
              <Col span={12} >
                <Form.Item label="Référence externe">
                  <Input placeholder="Référence externe" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Divider>Fabricant</Divider>
            <Row gutter={4}>
              <Col span={12} >
                <Form.Item label="Nom">
                  <Input placeholder="Nom"/>
                </Form.Item>
              </Col>
              <Col span={12} >
                <Form.Item label="Code TECCOM">
                  <Input placeholder="Code TECCOM" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Divider>Stock - Gestion du cache</Divider>
            <Row gutter={4}>
              <Col span={12} >
                <Form.Item label="Type de cache">
                  <Select placeholder="Non applicable"/>
                </Form.Item>
              </Col>
              <Col span={12} >
                <Form.Item label="Durée">
                  <Input placeholder="Durée" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Divider>Prix - Gestion du cache</Divider>
            <Row gutter={4}>
              <Col span={12} >
                <Form.Item label="Type de cache">
                  <Select placeholder="Non applicable"/>
                </Form.Item>
              </Col>
              <Col span={12} >
                <Form.Item label="Durée">
                  <Input placeholder="Durée" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={4}>
          <Col span={24} >
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={() => alert('Envoi du formulaire')}>
                Valider
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Articlesform;