import React from 'react';
import { Form, Input, InputNumber, Row, Col, Button, Checkbox, Divider, Select } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const Plateformesform = () => {
  const [form] = Form.useForm();

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {};

  return(
    <>
      <Form
      layout={'vertical'}
      form={form}
      initialValues={{ layout: 'vertical'}}
      onValuesChange={onFormLayoutChange}>
        <Row>
          <Col span={24}>
            <Row gutter={10}>
              <Col span={12}>
                <Form.Item label="Code">
                  <Input placeholder="Code"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Libellé">
                  <Input placeholder="Libellé"/>
                </Form.Item>
              </Col> 
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Row gutter={10}>
              <Col span={12}>
                <Form.Item label="Référentiel">
                  <Input placeholder="Référentiel"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Délai de livraison">
                  <Input placeholder="Délai de livraison"/>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Retours Acceptés">
              <Checkbox>Accepté</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Divider>Stock - Gestion du cache</Divider>
          <Col span={24}>
            <Row gutter={4}>
              <Col span={12}>
                <Form.Item label="Type de cache">
                  <Select placeholder="Non applicable"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Durée">
                  <InputNumber min={0} max={100} defaultValue={1}/>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Divider>Prix - Gestion du cache</Divider>
          <Col span={24}>
            <Row gutter={4}>
              <Col span={12}>
                <Form.Item label="Type de cache">
                  <Select placeholder="Non applicable"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Durée">
                  <InputNumber min={0} max={100} defaultValue={1}/>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Divider>Commande - Gestion du cache</Divider>
          <Col span={24}>
            <Row gutter={4}>
              <Col span={12}>
                <Form.Item label="Type de cache">
                  <Select placeholder="Non applicable"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Durée">
                  <InputNumber min={0} max={100} defaultValue={1}/>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
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

export default Plateformesform;