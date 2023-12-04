import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  @Post()
  async receiveData(@Body() body: any, @Res() res: any) {
    console.log('Address:', body.address);
    console.log('GCLID:', body.gclid);

    // Handle the received data as needed
    // ...

    // Sending a response back to the client
    res.status(HttpStatus.OK).json({
      message: 'Data received successfully',
      address: body.address,
      gclid: body.gclid,
    });
  }
}
