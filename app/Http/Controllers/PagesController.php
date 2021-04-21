<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PagesController extends Controller
{
    public function index()
    {
        // $developments = DB::table('developments')->whereIn('id', [4, 7, 10])->get();
        return view('pages.index'/*, compact('developments')*/);
    }
    public function login()
    {
        return view('pages.login');
    }
    public function contacts()
    {
        return view('pages.contacts');
    }
    public function patents()
    {
        $patents = DB::table('patents')->get();
        return view('pages.patents', compact('patents'));
    }
    public function developments()
    {
        $developments = DB::table('developments')->get();
        return view('pages.developments', compact('developments'));
    }
    public function about_us()
    {
        return view('pages.about_us');
    }
    public function development($id)
    {
        $development = DB::table('developments')->where('id', $id)->first();
        $development_images = DB::table('development_images')->where([
            ['development_id', $id],
            ['type', 'small']
        ])->get();
        return view('pages.development', ['id' => $id], compact(['development', 'development_images']));
    }


    // feedback
    public function feedback()
    {
        return view('pages.feedback');
    }
}
