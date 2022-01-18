import React from 'react'
import { Form, Container, Stack } from 'react-bootstrap'
import ItemCount from '../../../../components/ItemCount/ItemCount'

const FormItem = ({ stock, onAdd }) => {

    return (
        <>
            <Container
                style={{
                    margin_top: '300px',
                    flex_direction: 'column',
                    justify_content: 'center',
                    align_items: 'flex-end',
                    
                }} >
                <Form >
                    <Stack gap={3}>
                        <ItemCount onAdd={onAdd} stock={stock} />
                        
                    </Stack>

                </Form>
            </Container>

        </>
    )
}

export default FormItem
