const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

async function handler (req, res){
    const {email, items} = req.body;
    
    const transformedItems = items.map(item => ({
        description: item.description,
        quantity: 1,
        price_data: {
          currency: 'gbp',
          unit_amount: item.price*100,
          product_data: {
            name: item.title,
            images: [item.image]
          }
        }
      }));
  
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: transformedItems,
        shipping_rates: ['shr_1Iu3sqHb6BDs0NcEUMcmZ9Bs'],
        shipping_address_collection: {
          allowed_countries: ['GB','US', 'CA'],
        },
        mode: 'payment',
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      metadata:{
        email,
        images :JSON.stringify(items.map(item => item.image)) 
      }
  
      });
      // console.log(session)



      res.status(200).json({id: session.id})
  
  


};

export default handler;