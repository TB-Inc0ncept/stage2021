import { Form, Input, Button, Row, Col, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: 'Le champ est obligatoire.',
  types: {
    email: "Format adresse-mail invalide!",
  },
};

const Utilisateursform = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form {...layout} layout={'vertical'} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Row>
        <Col span={30}>
          <Row gutter={30}>
            <Col span={40} >
              <Form.Item label="Nom" name='lastName' rules={[{ required: true }]}>
                <Input placeholder="Nom" />
              </Form.Item>
              <Form.Item label="Email" name='email' rules={[{ required: true }]}>
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={12} >
              <Form.Item label="Prénom" name='firstName' rules={[{ required: true }]}>
                <Input placeholder="Prénom" />
              </Form.Item>
              <Form.Item label="RGPD / Conditions générales" name='gdprAccepted' valuePropName='checked'>
                <Checkbox>Accepté</Checkbox>
              </Form.Item>
            </Col>
          </Row>

        </Col>
      </Row>

      <Row gutter={2}>
        <Col span={24} >
          <Form.Item >
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
    
  );
};

export default Utilisateursform;