<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;

class ContactController extends Controller {

	public function index() {
		return view('contact');
	}

	// post method to submit form
	public function submit(Request $request) {
		$this->validate($request, [
			'email' => 'required|email',
			'subject' => 'min:3',
			'message' => 'min:10',
			'name' => 'min:3',
		]);

		$data = array(
			'email' => $request->email,
			'subject' => $request->subject,
			'bodyMessage' => $request->message,
			'sender' => $request->name,
		);

		Mail::send('emails.contact', $data, function ($message) use ($data) {
			$message->from($data['email']);
			$message->sender($data['sender']);
			$message->to('info@tedxntua.com');
			$message->subject($data['subject']);
		});

		Session::flash('success', 'Your Email was Sent!');

		return redirect()->url('/');
	}

}
