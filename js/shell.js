// Copyright Colin Barschel 2007-2009
// Shell commands implementation

TermGlobals.assignStyle( 32, 'm', '<a class="tlink" href="http://www.masswerk.at">', '<\/a>' );
TermGlobals.assignStyle( 64, 'n', '<a class="tlink" href="http://cb.vu/unixtoolbox.xhtml">', '<\/a>' );
var mycolor = TermGlobals.getColorString();
console.log("Color is: "+mycolor);
var clientip = "127.0.0.1";
var varfortune = ["this is only a test"];
var helpPage = [
    '%c(@beige)This is a Unix-like virtual shell command line interface.',
    'Every command can be bookmarked with the # sign, for example: http://cb.vu/#clock -t or http://cb.vu/#matrix',
    'Pipes are not implemented sorry, maybe one day I\'ll add emacs, but there is vi! :o)',
    'This terminal uses the termlib library from Norbert Landsteiner <%+mhttp://www.masswerk.at%-m>,',
    'the commands implementation and overall site are developed by Colin Barschel.',
    'See "info" for the full credentials.',
    '',
    'Some commands:',
    '   %c(@chartreuse)help%c(@darkgray)   .  .  .  .  .  .  .  %c(@beige)print this help page',
    '   %c(@chartreuse)info%c(@darkgray)   .  .  .  .  .  .  .  %c(@beige)display code credentials',
    '   %c(@chartreuse)exit%c(@darkgray)   .  .  .  .  .  .  .  %c(@beige)leave the terminal (same as logout or ESC key)',
    '   %c(@chartreuse)reload%c(@darkgray) .  .  .  .  .  .  .  %c(@beige)reload the web page and the terminal',
    '   %c(@chartreuse)redim%c(@darkgray)  .  .  .  .  .  .  .  %c(@beige)redimention the terminal size to the browser window',
    '   %c(@chartreuse)login%c(@darkgray)  .  .  .  .  .  .  .  %c(@beige)login as a different user (passwd = username)',
    '   %c(@chartreuse)snake%c(@darkgray)  .  .  .  .  .  .  .  %c(@beige)a variation of the classical snake game',
    '   %c(@chartreuse)invaders%c(@darkgray)  .  .  .  .  .  .  %c(@beige)invaders! Thanks to Norbert Landsteiner',
    '   %c(@chartreuse)clock%c(@darkgray)  .  .  .  .  .  .  .  %c(@beige)display a large ASCII clock (or stopwatch with option -t)',
    '   %c(@chartreuse)vi <file>%c(@darkgray) .  .  .  .  .  .  %c(@beige)edit or create a file with vi',
    '   %c(@chartreuse)echo "text" > <file>%c(@darkgray)  .  .  %c(@beige)create a file with some text',
    '   %c(@chartreuse)cat <file>%c(@darkgray)   .  .  .  .  .  %c(@beige)display the file on the terminal',
    '   %c(@chartreuse)more <file>%c(@darkgray)  .  .  .  .  .  %c(@beige)display the file on the terminal with pagewise output',
    '   %c(@chartreuse)pr <file>%c(@darkgray) .  .  .  .  .  .  %c(@beige)load the file on the browser (same as cb.vu/<file>)',
    '   %c(@chartreuse)apropos <command>%c(@darkgray)  .  .  .  %c(@beige)display a short info on the command',
    '   %c(@chartreuse)man <command>%c(@darkgray)   .  .  .  .  %c(@beige)man pages for the command. See also ls /usr/share/man',
    '   %c(@chartreuse)ssh [user@host]%c(@darkgray) .  .  .  .  %c(@beige)ssh to any host using self-signed mindterm',
    '   %c(@chartreuse)whereami%c(@darkgray)  .  .  .  .  .  .  %c(@beige)display your probable country and city',
    '   %c(@chartreuse)weather%c(@darkgray)   .  .  .  .  .  .  %c(@beige)display a weather information based on your location',
    '   %c(@chartreuse)matrix%c(@darkgray) .  .  .  .  .  .  .  %c(@beige)show a matrix-like screensaver (CPU hungry)',
    '   %c(@chartreuse)reboot%c(@darkgray) .  .  .  .  .  .  .  %c(@beige)reboot (root only)',
    '   %c(@chartreuse)chat%c(@darkgray)   .  .  .  .  .  .  .  %c(@beige)chat with the terminal',
    '   %c(@chartreuse)ls /bin%c(@darkgray)   .  .  .  .  .  .  %c(@beige)listing of all commands',
    '   %c(@chartreuse)cal,ls,cd,pwd,fortune,uname,uptime,ping,date,history%c(@beige)...  and so on should work',
    '',
    'Have a lot of fun... Oh and this site is bug free (of course :o)), still tell me if you crash it.'
                ];
var infoPage = [
    '%c(@beige)This console is implemented with the javascript terminal library termlib.js.',
    'Termlib and the invaders game are developed by:',
    '  (c) Norbert Landsteiner 2003-2007',
    '  mass:werk - media environments',
    '  <%+mhttp://www.masswerk.at%-m>',
    '',
    'The GeoIP location information is provided by "MaxMind"',
    '  <http://www.maxmind.com>.',
    '',
    'The weather data is provided by "The Weather Channel Interactive, Inc."',
    '  <http://www.weather.com>.',
    '',
    'The chatbot is adapted from the Alkali Chatbot."',
    '  <http://www.alkalisoftware.ca>.',
    '',
    'The rest of this site <cb.vu> and the additional shell and command code',
    'are developed by:',
    '  (c) Colin Barschel 2007-2008',
    '  c@cb.vu',
    '  <http://cb.vu>',
    '',
    'Thanks for looking around and have fun. Drop me a note if you liked this site.'
                ];
var asciinumber = [
    '    .XEEEEb          ,:LHL         :LEEEEEG       .CNEEEEE8              bMNj       NHKKEEEEEX          1LEEE1    KEEEEEEEKNMHH      8EEEEEL.        cEEEEEO    ',
    '   MEEEUXEEE8      jNEEEEE        EEEEHMEEEEU     EEEELLEEEEc           NEEEU      7EEEEEEEEEK       :EEEEEEN,    EEEEEEEEEEEEE    OEEEGC8EEEM     1EEELOLEEE3  ',
    '  NEE.    OEEC     EY" MEE        OC      LEEc    :"      EEE          EEGEE3      8EN              MEEM.                  :EE.   1EEj     :EEO   1EE3     DEEc ',
    ' ,EEj      EEE         HEE                 EEE            cEE:        EEU EEJ      NEC             EEE                     EEJ    EEE       EEE   EEN       KEE ',
    ' HEE       jEE1        NEE                 EEE            EEE        EEM  EEJ      EE             LEE   ..                EEK     DEEj     :EE7  ,EE1       jEE ',
    ' EEH        EEZ        KEE                :EE1      .::jZEEG        EEU   EEJ     .EEEEEENC       EE77EEEEEEL            NEE       UEENj  bEE7   .EEX       :EE.',
    '.EEZ        EEM        KEE                EEK       EEEEEEC       .EEc    EEC     :X3DGMEEEEU    3EEEED.".GEEE.         CEE.         EEEEEEE      EEEj     :EEE ',
    ' EEZ        EEM        KEE              :EEK           "jNEEZ    :EE      EE7             MEEU   LEEb       EEE        .EE8        DEEL:.8EEEM     NEEENMEEEHEE ',
    ' EEN       .EEG        KEE             bEEG               7EEM  jEEN738ODDEEM3b            EEE   MEE        8EE,       EEE        EEE      ,EEE     .bEEEEC XEE ',
    ' LEE       3EE:        KEE           .EEE,                 EEE  LEEEEEEEEEEEEEE            XEE   8EE        cEE:      NEE        7EE1       jEE1           :EE: ',
    ' .EEc      EEE         KEE          bEED                   EEE            EE1              EEE    EEX       EEE      3EE:        cEEc       7EEj          CEEG  ',
    '  MEE7    NEE.         EEE        jEEK            C       EEE1            EEC     j      :EEE     CEEG     LEEj     .EEU          EEE:     .EEE         1EEEJ   ',
    '   bEEEEEEEE.          EEE       NEEEEEEEEEEEE   bEEEEEEEEEE7             EEd    JEEEEEEEEEN       jEEEEEEEEE7     .EEE            KEEEEHEEEEL     8EEEEEEX     ',
    '     DEEEL7            CGD       3GD3DOGGGGGUX    :DHEEEN8.               bUd     7GNEEEMc           7LEEEX:       1XG               JHEEEM1       COLIN"       '
                   ];
var asciinumber_s = [
    '.oPYo.  .o    .oPYo. .oPYo.    .8  oooooo .pPYo. oooooo  .PY.  .oPYo. ',
    '8   o8   8        `8     `8   d"8  8      8         .o"  8  8  8"  `8 ',
    '8  P 8   8       oP"   .oP"  d" 8  8pPYo. 8oPYo.   .o"  .oPYo. 8.  .8 ',
    '8 d  8   8    .oP"      `b. Pooooo     `8 8"  `8  .o"   8"  `8 `YooP8 ',
    '8o   8   8    8"         :8     8      .P 8.  .P .o"    8.  .P     .P ',
    '`YooP"  o8o   8ooooo `YooP"     8  `YooP" `YooP" o"     `YooP" `YooP" '
                     ];
var asciiddot = [
    '     ',
    '     ',
    '     ',
    ' @@  ',
    ' @@  ',
    '     ',
    '     ',
    '     ',
    '     ',
    '     ',
    ' @@  ',
    ' @@  ',
    '     ',
    '     ',
    '     '];
var asciiddot_s = [
    '  ',
    'x ',
    '  ',
    '  ',
    'x ',
    '  '];
var asciin = asciinumber;
var asciid = asciiddot;
var bs = [
    '%c(@white)A problem has been detected and windows has been shut down to prevent',
    'damage to your computer.',
    '',
    'PAGE_FAULT_BECAUSE_OF_DUMB_USER',
    '',
    'Suggestions: Restart computer, if problems continue, install Linux.',
    '',
    'Technical Information:',
    '',
    '***STOP: 0x00000050 (0xBD32E7E4, 0x00000011, 0x8B5F87F4,0x00000012)',
    '',
    'Physical memory was dumped.'
          ];
var safari = false;
var fortuneid = 1;
var shortm = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var path = "/home/www"; // default path
var files_root_n = ['bin','etc','home','tmp','sbin','usr','var'];
var files_root_s = ['   512','   512','  1024','   512','   512','   512','   512'];
var files_root_t = ['Jan 23 00:13','Feb  2 14:36','Jan 23 00:13',
                    'Nov 10  2007','Nov 10  2007','Nov 10  2007','Nov 10  2007'];
var files_root = [files_root_n,files_root_s,files_root_t,'%c(@lightgrey)drwxr-x---   1 root  wheel'];
var files_etc_n = ['passwd','group','rc.conf','master.passwd','hosts','crontab'];
var files_etc_s = ['   766','   266','  3061','  3960','   766','  1852'];
var files_etc_t = ['Jan 23 00:13','Jan 23 00:13','Feb  2 14:36','Jan 23 00:13',
                   'Nov 10  2007','Nov 26 17:28'];
var files_etc = [files_etc_n,files_etc_s,files_etc_t,'%c(@lightgrey)-rw-r-----   1 root  wheel'];
var files_home_n = ['www'];
var files_home_s = ['   766'];
var files_home_t = ['Nov 10  2007'];
var files_home = [files_home_n,files_home_s,files_home_t,'%c(@lightgrey)drwxr-xr-x   1 root  wheel'];
var files_tmp_n = ['test'];
var files_tmp_s = ['   512'];
var files_tmp_t = ['Jun 11  2007'];
var files_tmp = [files_tmp_n,files_tmp_s,files_tmp_t,'%c(@lightgrey)drwxrwx---   1 root  wheel'];
var files_var_n = ['log'];
var files_var_s = ['   512'];
var files_var_t = ['Jun 11  2007'];
var files_var = [files_var_n,files_var_s,files_var_t,'%c(@lightgrey)drwxrwx---   1 root  wheel'];
var files_usr_n = ['share'];
var files_usr_s = ['   512'];
var files_usr_t = ['Oct 21  2006'];
var files_usr = [files_usr_n,files_usr_s,files_usr_t,'%c(@lightgrey)drwxrwxr-x   1 root  wheel'];
var files_share_n = ['man'];
var files_share_s = ['   512'];
var files_share_t = ['Oct 21  2006'];
var files_share = [files_share_n,files_share_s,files_share_t,'%c(@lightgrey)drwxrwxr-x   1 root  wheel'];
var files_man_n = ['echo','cal','clock','ed','hostname','invaders','ls','matrix','redim','reload','reset','snake','ssh','vi','weather','whereami'];
var files_man_s = ['   252','   287','   352','  1173','   281','   361','   292','   291',
                   '   451','   353','   198','   358','   232','   216','   112','  3412'];
var files_man_t = ['Nov 21  2007','Jan 31  2008','Nov 21  2007','Nov 21  2007','Nov 21  2007',
                   'Nov 21  2007','Nov 21  2007','Jul 10  2008','Nov 21  2007','Nov 21  2007','Apr 17  2008',
                   'Feb 01  2008','Feb 11  2008','Apr 02  2008','Nov 21  2007','Mar 21  2008'];
var files_man = [files_man_n,files_man_s,files_man_t,'%c(@lightgrey)-rw-rw-r--   1 root  wheel'];
var files_bin_n = ['apropos','browse','browser','cal','cat','chat','clear','clock','cd','date','df','echo','ed',
                   'fortune','history','hostname','help','id','info','invaders','ll','logout','ls','man','matrix','more',
                   'ping','ps','pwd','pr','reload','snake','ssh','sudo','redim','reset','top','uname','whereami',
                   'rm','time','uptime','vi','who','weather','whoami'];
var files_bin_s = ['  1933','  3061','  3960','   766','  1150','  2170','  1176',
                   '  1834','  1650',' 81933','   695','  1507','  1327','  1127',
                   '  1852','  1140','  1933','   256','  1678',' 32648','  5150',
                   '  1232','  5150','   593','  3595','  1698','  2668','  1668',
                   '  3855','  7159','  1353','  3695','  1435','  1135',
                   '  1156','   815','   193','  2565','  5466','  9331',
                   '  1357','   150',' 19364','  8364','   384','  1744'];
var files_bin_t = ['Oct 21  2006','Oct 21  2006','Oct 21  2006','Oct 21  2006','Oct 21  2006','Oct 21  2006',
                   'Oct 21  2006','Oct 22  2006','Oct 22  2006','Oct 21  2006','Oct 21  2006','Apr 11  2008','Jul 11  2008',
                   'Oct 21  2006','Oct 21  2006','Feb 10  2008','Feb 10  2008','Oct 21  2006','Jun 11  2007','Jun 11  2007',
                   'Apr 11  2008','Oct 21  2006','Oct 21  2006','Oct 21  2006','Oct 21  2006','Jan 28  2008','Jan 25  2008',
                   'Oct 21  2006','Oct 21  2006','Jun 11  2007','Oct 21  2006','Apr  5  2008','Oct 21  2006','Jan 21  2008',
                   'Oct 21  2006','Nov 10  2007','Oct 21  2006','Oct 21  2006','Oct 21  2006','Oct 21  2006',
                   'Oct 21  2006','Oct 21  2006','Apr  4 02:46','Jan 23 00:13','Jan 23 00:13','Feb 10 01:24'];
var files_bin = [files_bin_n,files_bin_s,files_bin_t,'%c(@lightgrey)-rwxr-x--x   1 root  wheel'];
var files_sbin_n = ['sysctl','netstat','browser','passwd','ifconfig',
                    'route','mount','reboot','halt','shutdown','su'];
var files_sbin_s = ['  1933','  3061','  3960','   766','  1150','  1350',
                    '  1834','  1650','   933','   695','  1507'];
var files_sbin_t = ['Feb 10 01:23','Feb 10 01:24','Oct 21  2006','Oct 24  2006',
                    'Oct 21  2006','Oct 21  2006','Oct 21  2006',
                    'Jun 11  2007','Oct 21  2006','Oct 21  2006',
                    'Oct 21  2006'];
var files_sbin = [files_sbin_n,files_sbin_s,files_sbin_t,'%c(@lightgrey)-rwxr-x---   1 root  wheel'];
var files_www_n = ['about.txt','bugs.txt','cb.txt','exploring.gif','favicon.ico','index.html','shell.js',
                   'sitemap.xml','termlib.js','termlib_invaders.js','termlib_parser.js','unixtoolbox.book.pdf',
                   'unixtoolbox.book2.pdf','unixtoolbox.pdf','unixtoolbox.txt',
                   '%+nunixtoolbox.xhtml%-n'];
var files_www_s = ['  1045','   954','  4033',' 98166','  1150','  1933',' 25695','   766',
                   ' 64720',' 21371','  6036','272458','271664',
                   '345472','124113','191701'];
var files_www_t = ['Feb 15 01:31','Apr 18 00:31','Feb 11 02:06','Jul 23  2004','Jan 31 15:17','Feb 10 16:53',
                   'Feb  5 00:52','Feb 10 01:13','Feb 10 01:13','Feb 10 02:14','Feb 10 02:14',
                   'Apr 09 02:14','Apr 09 02:14','Apr 09 04:20','Apr 09 01:47','Apr 09 02:50'];
var files_www = [files_www_n,files_www_s,files_www_t,'%c(@lightgrey)-rw-r-----   1 colin   www'];
var tree = ['/','/etc','/tmp','/bin','/home','/home/www',
            '/sbin','/usr','/usr/share','/usr/share/man','/var'];
var tree_files = [files_root,files_etc,files_tmp,files_bin,files_home,
                  files_www,files_sbin,files_usr,files_share,files_man,files_var];

var remote_files = ['unixtoolbox.xhtml','unixtoolbox.txt','index.html','shell.js',
                    'termlib.js','termlib_parser.js','termlib_invaders.js'];
var binary_files = ['unixtoolbox.pdf','unixtoolbox.book.pdf','unixtoolbox.book2.pdf',
                    'exploring.gif','favicon.ico'];

var filesContent = [];  // warning! This is an object, not a real array.
filesContent["/boot/shutdown"] = [
    '%c(@lightgrey)Waiting (max 60 seconds) for system process \'crypto\' to stop...done',
    '%c(@lightgrey)Waiting (max 60 seconds) for system process \'vnlru\' to stop...done',
    '%c(@lightgrey)Waiting (max 60 seconds) for system process \'bufdaemon\' to stop...done',
    '%c(@lightgrey)Waiting (max 60 seconds) for system process \'syncer\' to stop...',
    '%c(@lightgrey)Syncing disks, vnodes remaining...5 6 7 3 2 1 1 1 0 0 0 done',
    '',
    '',
    '',
    '%c(@lightgrey)All buffers synced.',
    '%c(@lightgrey)Uptime: 14d13h29m45s',
    '',
    '%c(@lightgrey)Rebooting...%n',
    '',
    '',
    ''];
filesContent["/boot/kernel"] = [
    '%c(@lightgrey)CB.VU ROM BIOS Version 1.34 A12',
    '%c(@lightgrey)Copyright 2007-2008 Colin Barschel All Rights Reserved',
    '',
    '%c(@lightgrey)FreeBSD 7.1-STABLE #3: Sat Feb 16 16:14:11 CET 2009',
    '%c(@lightgrey)  sysad@cb.vu:/usr/obj/usr/src/sys/CB',
    '',
    '%c(@lightgrey)Timecounter "i8254" frequency 1193182 Hz quality 0',
    '%c(@lightgrey)CPU: Dual Core AMD Opteron(tm) Processor 270    (2010.31-MHz K8-class CPU)',
    '%c(@lightgrey)  Origin = "AuthenticAMD"  Id = 0x20f12  Stepping = 2',
    '%c(@lightgrey)  Features=0x178bfbff<FPU,VME,DE,PSE,TSC,MSR,PAE,MCE,CX8,APIC,SEP,MTRR,PGE,MCA,CMOV,PAT,PSE36,CLFLUSH,MMX,FXSR,SSE,SSE2,HTT>',
    '%c(@lightgrey)  Features2=0x1<SSE3>',
    '%c(@lightgrey)  AMD Features=0xe2500800<SYSCALL,NX,MMX+,FFXSR,LM,3DNow!+,3DNow!>',
    '%c(@lightgrey)  AMD Features2=0x3<LAHF,CMP>',
    '%c(@lightgrey)  Cores per package: 2',
    '%c(@lightgrey)usable memory = 2139738112 (2040 MB)',
    '%c(@lightgrey)avail memory  = 2065133568 (1969 MB)',
    '',
    '%c(@lightgrey)Detecting IDE drives ... IDE Flash Disk',
    '',
    '%c(@lightgrey)acpi0: <Nvidia AWRDACPI> on motherboard',
    '%c(@lightgrey)acpi_timer0: <24-bit timer at 3.579545MHz> port 0x808-0x80b on acpi0',
    '%c(@lightgrey)ata0: <ATA channel 0> on atapci0',
    '%c(@lightgrey)ata1: <ATA channel 1> on atapci0',
    '%c(@lightgrey)usb0: <SiS 5571 USB controller> on ohci0',
    '%c(@lightgrey)usb0: USB revision 2.0',
    '%c(@lightgrey)uhub0: SiS OHCI root hub, class 9/0, rev 1.00/1.00, addr 1',
    '%c(@lightgrey)cpu0: <ACPI CPU> on acpi0',
    '%c(@lightgrey)cpu1: <ACPI CPU> on acpi0',
    '%c(@lightgrey)bge0: <Broadcom NetXtreme Gigabit Ethernet Controller, ASIC rev. 0x3003> mem 0xfe9e0000-0xfe9effff irq 18 at device 6.0 on pci1',
    '%c(@lightgrey)Looks convincing, doesn\'t it?',
    '%c(@lightgrey)atapci0: <SiS 962/963 UDMA133 controller> port 0x1f0-0x1f7,0x3f6,0x170-0x177at device 2.5 on pci0%n',
    '%c(@lightgrey)Timecounters tick every 1.000 msec',
    '',
    '%c(@lightgrey)ipfw2 (+ipv6) initialized, divert enabled, rule-based forwarding disabled, default to deny, logging enabled',
    '%c(@lightgrey)Trying to mount root from ufs:/dev/ad0a',
    '',
    '%c(@lightgrey)/bin/sh: accessing tty1',
    '%c(@lightgrey)Starting external programs: ssh apache2 mxvpn sendmail',
    '',
    'ready',
    ' '];
filesContent["/etc/passwd"] = [
    '%c(@lightgrey)# $FreeBSD: src/etc/master.passwd,v 1.40 2005/06/06 20:19:56 brooks Exp $',
    '#',
    'root:*:0:0:Charlie &:/root:/bin/csh',
    'toor:*:0:0:Bourne-again Superuser:/root:',
    'mailnull:*:26:26:Sendmail Default User:/var/spool/mqueue:/usr/sbin/nologin',
    'www:*:80:80:World Wide Web Owner:/nonexistent:/usr/sbin/nologin',
    'sysa:*:1001:0:System Administrator:/home/sysadmin:/bin/tcsh'];
filesContent["/etc/group"] = [
    '%c(@lightgrey)# $FreeBSD: src/etc/group,v 1.32.2.1 2006/03/06 22:23:10 rwatson Exp $',
    '#',
    'wheel:*:0:root,sysa',
    'mailnull:*:26:milter',
    'www:*:80:',
    'sysa:*:1001:'];
filesContent["/etc/rc.conf"] = [
    '%c(@lightgrey)hostname="cb.vu"',
    'firewall_enable="YES"              # Set to YES to enable firewall functionality',
    'firewall_type="web"                # Firewall type (see /etc/rc.firewall)',
    'ifconfig_rl0="inet 78.31.70.238  netmask 255.255.255.0"',
    'defaultrouter="78.31.70.1"',
    'sshd_enable="YES"                  # Enable sshd',
    'sendmail_enable="YES"              # Run the sendmail inbound daemon (YES/NO).',
    'sendmail_flags="-L sm-mta -bd -q30m"',
    'apache22_enable="YES"              # start Apache httpd',
    'apache22ssl_enable="YES"',
    'apache22_http_accept_enable="YES"  # Use kernel accf_data and accf_http modules'];
filesContent["/etc/hosts"] = [
    '%c(@lightgrey)# In the presence of the domain name service or NIS, this file may',
    '# not be consulted at all; see /etc/nsswitch.conf for the resolution order.',
    '#',
    '::1                     localhost localhost.cb.vu',
    '127.0.0.1               localhost localhost.cb.vu'];
filesContent["/etc/crontab"] = [
    '%c(@lightgrey)# $FreeBSD: src/etc/crontab,v 1.32 2002/11/22 16:13:39 tom Exp $',
    '#minute hour    mday    month   wday    who     command',
    '# Save some entropy so that /dev/random can re-seed on boot.',
    '*/11    *       *       *       *       operator /usr/libexec/save-entropy',
    '# Rotate log files every hour, if necessary.',
    '0       *       *       *       *       root    newsyslog',
    '# Perform daily/weekly/monthly maintenance.',
    '1       3       */2     *       *       root    periodic daily',
    '15      4       */2     *       6       root    periodic weekly',
    '30      5       1       */2     *       root    periodic monthly'];
filesContent["/usr/share/man/weather"] = [
    '%c(@lightcyan)WEATHER                  CB.VU General Commands Manual                WEATHER',
    '',
    'NAME',
    '     weather -- display weather information or forecast based on your location',
    '',
    'SYNOPSIS',
    '     weather [-i -f] [city,country]',
    '',
    'DESCRIPTION',
    '     The weather command displays the weather information based either on the',
    '     city/country given as argument, or based on the IP address location. The',
    '     IP location is retrieved with the whereami command. The units are metric',
    '     per default and can be changed to imperial with -i.',
    '',
    '     The options are as follows:',
    '',
    '     -i      Display imperial units or U.S. system or something like that.',
    '',
    '     -f      Weather forecast for the night and next day.',
    '',
    '     [city,country] The whole city and country has to be quoted if any of them',
    '             has a space in its name. See the examples',
    '',
    'EXAMPLES',
    '%c(@chartreuse)weather                              %c(@lightcyan)# weather based on the IP location',
    '%c(@chartreuse)weather -i "London,United Kingdom"   %c(@lightcyan)# use imperial units',
    '%c(@chartreuse)weather -f Geneva,Switzerland        %c(@lightcyan)# Night and next day forecast',
    '%c(@chartreuse)weather -i -f "San Francisco,United States"%c(@lightcyan)',
    '',
    'SEE ALSO',
    '     whereami'];
filesContent["/usr/share/man/whereami"] = [
    '%c(@lightcyan)WHEREAMI                 CB.VU General Commands Manual               WHEREAMI',
    '',
    'NAME',
    '     whereami -- display your probable position based on you public IP',
    '',
    'DESCRIPTION',
    '     The geographic position of your IP is provided by "MaxMind" using the',
    '     web service. See http://www.maxmind.com. The accuracy is limited by the',
    '     provider information and extension of the IP range. Also sometimes it',
    '     simply does not work...',
    '',
    'SEE ALSO',
    '     weather'];
filesContent["/usr/share/man/vi"] = [
    '%c(@lightcyan)VI                       CB.VU General Commands Manual                     VI',
    '',
    'NAME',
    '     Vi -- a screen oriented text editor.',
    '',
    'DESCRIPTION',
    '     Vi is a modal editor and is either in insert mode or err... Who doesn\'t ',
    '     know vi? This implementation is very thin and does not support paging. That',
    '     is only the visible page can be edited. The following commands should work:',
    '',
    '     <ESC>        to enter command mode',
    '     :q<Enter>    to exit',
    '     :w<Enter>    to save',
    '     :w filename  to save to "filename"',
    '     :e filename  to open "filename"',
    '     :q!<Enter>   to exit without saving',
    '     D            to delete rest of line',
    '     dd           to delete current line',
    '     x            to delete current char',
    '     i            to enter edit mode    ',
    '     UP RIGHT DOWN LEFT to move the cursor',
    '     or h left  j down  k up  l right',
    '',
    '     %c(@chartreuse)On Safari browsers use <TAB> instead of <ESC>!!%c(@lightcyan)'];
filesContent["/usr/share/man/ssh"] = [
    '%c(@lightcyan)SSH                      CB.VU General Commands Manual                    SSH',
    '',
    'NAME',
    '     ssh -- Mindterm SSH client (remote login program)',
    '',
    'SYNOPSIS',
    '     ssh [-L port:host:hostport] [-p port] [user@]hostname',
    '',
    'DESCRIPTION',
    '     The ssh command will start the Appgate java applet "mindterm".',
    '     The applet is self-signed and can thus be used to connect to any server',
    '     (as you don\'t have an account on cb.vu...)',
    '     and also allows to build tunnels. This is the compiled version from',
    '     www.appgate.com with the logo removed.',
    '     %c(@chartreuse)There is no connection between this client and the cb.vu server.',
    '',
    '     Use the top right "X" to close the ssh client%c(@lightcyan)',
    '',
    'EXAMPLES',
    '     ssh hostname',
    '     ssh -p 123 user@hostname',
    '     ssh -L 3128:127.0.0.1:80 -p 1234 user@hostname'];

filesContent["/usr/share/man/echo"] = [
    '%c(@lightcyan)ECHO                     CB.VU General Commands Manual                   ECHO',
    '',
    'NAME',
    '     echo -- write arguments to the standard output',
    '',
    'DESCRIPTION',
    '     The echo utility writes any specified operands, separated by single blank',
    '     (\' \') characters and followed by a newline (\\n) character, to the stan-',
    '     dard output.',
    '     the > redirect can be used to create a file. For example the command',
    '     %c(@chartreuse)echo Hello world! > hello.txt%c(@lightcyan)',
    '     will create the file hello.txt'];
filesContent["/usr/share/man/hostname"] = [
    '%c(@lightcyan)HOSTNAME               CB.VU General Commands Manual                 HOSTNAME',
    '',
    'NAME',
    '     hostname -- print name of current host system',
    '',
    'SYNOPSIS',
    '     hostname [-fsi]',
    '',
    'DESCRIPTION',
    '     The hostname utility prints the name of the current host.',
    '     This script uses the hostname variable in /etc/rc.conf.',
    '',
    '     Options:',
    '',
    '     -f    Include domain information in the printed name.  This is the',
    '           default behavior.',
    '',
    '     -s    Trim off any domain information from the printed name.',
    '',
    '     -i    Show the corresponding host IP address.'];
filesContent["/usr/share/man/reload"] = [
    '%c(@lightcyan)RELOAD                 CB.VU General Commands Manual                   RELOAD',
    '',
    'NAME',
    '     reload -- reload the terminal as a new http request',
    '',
    'DESCRIPTION',
    '     This command will reload the terminal with a new http GET request from the',
    '     browser. This will reinitialize the shell and all variables and has the same ',
    '     effect as the browser reload button. A reload will also recalculate the shell',
    '     size.',
    '',
    'SEE ALSO',
    '     reset, redim'];
filesContent["/usr/share/man/reset"] = [
    '%c(@lightcyan)RESET                  CB.VU General Commands Manual                    RESET',
    '',
    'NAME',
    '     reset -- reset the terminal to the initial state',
    '',
    'DESCRIPTION',
    '     This command will reset the terminal to its initial state but will not reload',
    '     the variables. The created file are not deleted either. Delete them all with',
    '     rm * in the home directory.',
    '',
    'SEE ALSO',
    '     reload'];
filesContent["/usr/share/man/redim"] = [
    '%c(@lightcyan)REDIM                  CB.VU General Commands Manual                    REDIM',
    '',
    'NAME',
    '     redim -- calculates and resizes the shell to it\'s maximal size.',
    '',
    'DESCRIPTION',
    '     This command resizes the shell to fit the visible browser area, it can be used',
    '     when the browser size has changed. The argument <-s> will only display the sizes',
    '     but will not change anything.',
    '',
    '     The following options are available:',
    '',
    '     -s only display the window and shell sizes without changing anything',
    '',
    'SEE ALSO',
    '     reload'];
filesContent["/usr/share/man/snake"] = [
    '%c(@lightcyan)SNAKE                  CB.VU General Commands Manual                    SNAKE',
    '',
    'NAME',
    '     snake -- a variation of the classical snake game.',
    '',
    'DESCRIPTION',
    '     The snake must be steered to get food (the numbers randomly displayed)',
    '     and avoid crashing on rocks or wall or itself. There is also an autopilot,',
    '     but it is not to be trusted.',
    '',
    '     The following options are available:',
    '',
    '     -s1 for speed: -s1 = slow; -s3 = fast',
    '     -f1 for food: -f1 = less; -f3 = more',
    '     -o1 for obstacles: -o1 = less; -o3 = more rocks',
    '     -a toggle the autopilot on or off. Status is displayed on the status line',
    '     -r toggle auto-restart on or off. Status is displayed on the status line',
    '',
    'EXAMPLES',
    '',
    '     snake -f3 -o3 -a -r     max food and rocks with autopilot and auto-restart',
    '',
    'SEE ALSO',
    '     invaders'];
filesContent["/usr/share/man/invaders"] = [
    '%c(@lightcyan)INVADERS               CB.VU General Commands Manual                  INVADERS',
    '',
    'NAME',
    '     invaders -- the classical invaders game, courtesy of Norbert Landsteiner.',
    '',
    'DESCRIPTION',
    '     The invaders must be shot down before they reach earth. The ship must also',
    '     avoid the enemy fire.',
    '',
    '     On a large screen the game might be too stretched and thus too easy to',
    '     win... Use option -s to reduce the available game area to the classical',
    '     80x25 characters.',
    '',
    '     -s start the game with a smaller area of 80x25 characters',
    '',
    'SEE ALSO',
    '     snake'];
filesContent["/usr/share/man/ls"] = [
    '%c(@lightcyan)LS                     CB.VU General Commands Manual                       LS',
    '',
    'NAME',
    '     ls -- list directory contents',
    '',
    'SYNOPSIS',
    '     ls [-la] [directory]',
    '',
    'DESCRIPTION',
    '     For each operand that names a directory, ls displays the names of files',
    '     contained within that directory, as well as any requested, associated',
    '     information.',
    '     If no operands are given, the contents of the current directory are dis-',
    '     played.',
    '',
    '     The following options are available:',
    '',
    '     -l List files in the long format with date and permission information',
    '',
    '     -a Display also hidden files and folders'];
filesContent["/usr/share/man/matrix"] = [
    '%c(@lightcyan)MATRIX                 CB.VU General Commands Manual                   MATRIX',
    '',
    'NAME',
    '     matrix -- a matrix like screen saver animation',
    '',
    'SYNOPSIS',
    '     matrix [-s]',
    '',
    'DESCRIPTION',
    '     This animation displays falling random letters in a gree gradient. This is',
    '     quite heavy on the browser rendering engine and thus uses a lot of CPU.',
    '',
    '     The following options are available:',
    '',
    '     -s Start with an empty page and fill it with time. Default starts with a newly',
    '        generated screen.',
    '',
    '     key <q> or <ESC> to quit the animation',
    '',
    '     key <space> to pause or play the animation',
    '',
    '     any other key will add an iteration'];
filesContent["/usr/share/man/cal"] = [
    '%c(@lightcyan)CAL                    CB.VU General Commands Manual                      CAL',
    '',
    'NAME',
    '     cal -- a simple month calender',
    '',
    'SYNOPSIS',
    '     cal [n] (n = 1-12)',
    '',
    'DESCRIPTION',
    '     Display a calender of the current month or an other month given as option.',
    '',
    '     The following options are available:',
    '',
    '     n  Selects an other month of the year. For example:',
    '        Jan = 1, Jan next year = 13, Dec last year = 0'
                                      ];
filesContent["/usr/share/man/clock"] = [
    '%c(@lightcyan)CLOCK                  CB.VU General Commands Manual                    CLOCK',
    '',
    'NAME',
    '     clock -- display a large clock or stopwatch',
    '',
    'SYNOPSIS',
    '     clock [-t -s]',
    '',
    'DESCRIPTION',
    '     With no option the command clock displays a large clock in full screen',
    '     mode and international format, like 21:45:04. It is also possible to display',
    '     a stopwatch. Use any key besides <space> and <r> to quit',
    '',
    '     The following options are available:',
    '',
    '     -t start in stopwatch mode',
    '',
    '     -s use smaller numbers. This is automatic if the terminal is too small',
    '',
    '     <space key> pause the display, the time is still ticking...',
    '',
    '     <r key>     reset the stopwatch and start again.'
                                        ];
filesContent["/usr/share/man/ed"] = [
    '%c(@lightgrey)This text is straight from http://www.gnu.org/fun/jokes/ed.msg.html',
    '%c(@lightcyan)When I log into my Xenix system with my 110 baud teletype, both vi',
    '*and* Emacs are just too damn slow.  They print useless messages like,',
    '\'C-h for help\' and \'"foo" File is read only\'.  So I use the editor',
    'that doesn\'t waste my VALUABLE time.',
    '',
    'Ed, man!  !man ed',
    '',
    'ED(1)               Unix Programmer\'s Manual                ED(1)',
    '',
    'NAME',
    '     ed - text editor',
    '',
    'SYNOPSIS',
    '     ed [ - ] [ -x ] [ name ]',
    'DESCRIPTION',
    '     Ed is the standard text editor.',
    '---',
    '',
    'Computer Scientists love ed, not just because it comes first',
    'alphabetically, but because it\'s the standard.  Everyone else loves ed',
    'because it\'s ED!',
    '',
    '"Ed is the standard text editor."',
    '',
    'And ed doesn\'t waste space on my Timex Sinclair.  Just look:',
    '',
    '-rwxr-xr-x  1 root          24 Oct 29  1929 /bin/ed',
    '-rwxr-xr-t  4 root     1310720 Jan  1  1970 /usr/ucb/vi',
    '-rwxr-xr-x  1 root  5.89824e37 Oct 22  1990 /usr/bin/emacs',
    '',
    'Of course, on the system *I* administrate, vi is symlinked to ed.',
    'Emacs has been replaced by a shell script which 1) Generates a syslog',
    'message at level LOG_EMERG; 2) reduces the user\'s disk quota by 100K;',
    'and 3) RUNS ED!!!!!!',
    '',
    '"Ed is the standard text editor."',
    '',
    'Let\'s look at a typical novice\'s session with the mighty ed:',
    '',
    'golem$ ed',
    '',
    '?',
    'help',
    '?',
    '?',
    '?',
    'quit',
    '?',
    'exit',
    '?',
    'bye',
    '?',
    'hello?',
    '?',
    'eat flaming death',
    '?',
    '^C',
    '?',
    '^C',
    '?',
    '^D',
    '?',
    '',
    '---',
    'Note the consistent user interface and error reportage.  Ed is',
    'generous enough to flag errors, yet prudent enough not to overwhelm',
    'the novice with verbosity.',
    '',
    '"Ed is the standard text editor."',
    '',
    'Ed, the greatest WYGIWYG editor of all.',
    '',
    'ED IS THE TRUE PATH TO NIRVANA!  ED HAS BEEN THE CHOICE OF EDUCATED',
    'AND IGNORANT ALIKE FOR CENTURIES!  ED WILL NOT CORRUPT YOUR PRECIOUS',
    'BODILY FLUIDS!!  ED IS THE STANDARD TEXT EDITOR!  ED MAKES THE SUN',
    'SHINE AND THE BIRDS SING AND THE GRASS GREEN!!',
    '',
    'When I use an editor, I don\'t want eight extra KILOBYTES of worthless',
    'help screens and cursor positioning code!  I just want an EDitor!!',
    'Not a "viitor".  Not a "emacsitor".  Those aren\'t even WORDS!!!! ED!',
    'ED! ED IS THE STANDARD!!!',
    '',
    'TEXT EDITOR.',
    '',
    'When IBM, in its ever-present omnipotence, needed to base their',
    '"edlin" on a Unix standard, did they mimic vi?  No.  Emacs?  Surely',
    'you jest.  They chose the most karmic editor of all.  The standard.',
    '',
    'Ed is for those who can *remember* what they are working on.  If you',
    'are an idiot, you should use Emacs.  If you are an Emacs, you should',
    'not be vi.  If you use ED, you are on THE PATH TO REDEMPTION.  THE',
    'SO-CALLED "VISUAL" EDITORS HAVE BEEN PLACED HERE BY ED TO TEMPT THE',
    'FAITHLESS.  DO NOT GIVE IN!!!  THE MIGHTY ED HAS SPOKEN!!!',
    '',
    '?'
                                     ];
var pslong = ['%c(@lightgrey)USER   PID %CPU %MEM   VSZ   RSS  TT  STAT STARTED      TIME COMMAND' ];

var globalterm;
var fetcherror = "";
var vgeoip_country_code;
var vgeoip_country_name;
var vgeoip_city;
var vgeoip_region;
var vgeoip_latitude;
var vgeoip_longitude;

function incrementLoaded(t) {
    var loaded = readCookie("loaded");
    loaded++;

    if (loaded > 4) {
        t.newLine();
        t.write('%c(@lightgrey)You can use "%c(@chartreuse)fortune%c(@lightgrey)" you know...%n');
        carriageReturn();
        loaded = 2;
    }
    createCookie("loaded", loaded, 0,5);
}
function carriageReturn() {
    Terminal.prototype.globals.keyHandler({which: globalterm.termKey.CR, _remapped:true});
}
function pressKey(ch) {
    Terminal.prototype.globals.keyHandler({which: ch, _remapped:true});
}
function createCookie(name,value,days,min) {
    var expires;
    var date = new Date();
    if (days) {
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    } else {expires = "";}
    if (min) {
        date.setTime(date.getTime()+(min*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {c = c.substring(1,c.length);}
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return "";
}
function readAllCookies() {
    var nameEQ = "=";
    var all = [];
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {c = c.substring(1,c.length);}
        all.push(c.substring(c[0],c.indexOf(nameEQ)));
    }
    return all;
}
// yes I want indexOf on arrays!
if(!Array.indexOf){
    Array.prototype.indexOf = function(obj){
        for(var i=0; i<this.length; i++){
            if(this[i]==obj){ return i; }
        }
        return -1;
    };
}
function randomRange(min, max) {
    if ( min > max ) {return -1;}
    if ( min == max ) {return min;}
    var r = parseInt(Math.random() * (max+1), 10 );
    return ( r + min <= max ? r + min : r );
}
function browserWidth() {
    if (window.innerWidth) {
        return window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth;
    } else if (document.body && document.body.offsetWidth) {
        return document.body.offsetWidth;
    } else {
        return 0;
    }
}
function browserHeight() {
    if (window.innerHeight) {
        return window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientHeight;
    } else if (document.body && document.body.offsetHeight) {
        return document.body.offsetHeight;
    } else {
        return 0;
    }
}
Date.prototype.getMonthName = function() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'][this.getMonth()];
};
Date.prototype.milTime = function () {
    var t = this.getHours()+':'+this.getMinutes()+':'+this.getSeconds();
    return t;
};

Date.prototype.daysInMonth = function () {
    return new Date(this.getFullYear(), this.getMonth()+1, 0).getDate();
};

Date.prototype.calendar = function() {
    // see http://www.hunlock.com/blogs/Javascript_Dates-The_Complete_Reference
    var calArray = [];
    var buildStr = '';
    var numDays = this.daysInMonth();
    var startDay= new Date(this.getFullYear(), this.getMonth(), 1).getDay();
    calArray.push('%c(@lightgrey)       '+this.getMonthName()+' '+this.getFullYear());
    calArray.push('Sun Mon Tue Wed Thu Fri Sat');

    for(var i=0; i<startDay; i++) {buildStr+='    ';}
    var blankdays=startDay;
    var filler = '';
    var j = 1;

    // For each day in the month, insert it into the calendar.
    for(i=1; i<=numDays; i++) {
        if (this.getDate() == i) {j = '%+r'+i+'%-r';
        } else {j = i;}
        if (i<10) {buildStr+=' '+j+'  ';
        } else {buildStr+=j+'  ';}
        blankdays++;
        if (((blankdays%7) === 0)&&(i<numDays)) {
            calArray.push(buildStr);
            buildStr = '';
        }
    }
    // pad empty days until the end of the calendar.
    blankdays++;
    while((blankdays%7) !== 0) {
        buildStr+='    ';
        blankdays++;
    }

    calArray.push(buildStr);

    return calArray;
};
Array.prototype.shuffle = function(){ // prototype to shuffle the array elements
    var tindex, rindex;
    for(var i =0; i < this.length; i++){
        rindex = Math.floor(Math.random() * this.length);
        tindex = this[i];
        this[i] = this[rindex];
        this[rindex] = tindex;
    }
};

// Remote files
var xmlHttp = null;
if (typeof XMLHttpRequest != 'undefined') { // Mozilla, Opera, Safari, IE 7
    xmlHttp = new XMLHttpRequest();
}
if (!xmlHttp) { // IE 6/5
    var xhttperr;
    try {
        xmlHttp  = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(xhttperr) {
        try {
            xmlHttp  = new ActiveXObject("Microsoft.XMLHTTP");
        } catch(xhttperr) {
            xmlHttp  = null;
        }
    }
}
function fetchHttp(url,fkt) {
    var xhttperr;
    fetcherror = "";
    if (xmlHttp) {
        try {
            xmlHttp.open('GET', url, true);
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4) {
                    fkt(xmlHttp.responseText);
                }
            };
            xmlHttp.send(null);
        } catch(xhttperr) {
            fetcherror = "Error: no network";
            if (fkt != eval) {globalterm.write(fetcherror);globalterm.prompt();}
        }
    } else {fkt("Error: no XMLHttpRequest. Your browser is broken!");}
}
function evaljs(content) {
    var JSONCode=document.createElement("script");
    JSONCode.setAttribute('type', 'text/javascript');
    JSONCode.text = content;
    document.body.appendChild(JSONCode);
}
function displayraw(content) {
    globalterm.write(content);
    globalterm.rawMode = false;
    globalterm.prompt();
}
function displaymore(content) {
    globalterm.clear();
    globalterm.write('%c(@lightgrey)'+content,true);
    globalterm.rawMode = false;
}
function initGeoIP() {
    if ( !window.geoip_country_code ) {
        vgeoip_country_code = "N/A";
        vgeoip_country_name = "N/A";
        vgeoip_city = "N/A";
        vgeoip_region = "N/A";
        vgeoip_latitude = "N/A";
        vgeoip_longitude = "N/A";
    } else {
        vgeoip_country_code = geoip_country_code();
        vgeoip_country_name = geoip_country_name();
        vgeoip_city = geoip_city();
        vgeoip_region = geoip_region();
        vgeoip_latitude = geoip_latitude();
        vgeoip_longitude = geoip_longitude();
    }
}
function delAFile(fname) {
    var fpath = getPath(fname);
    if (fpath[0] != '/home/www') {
        globalterm.write('%c(@lightgrey) rm '+fname+': Permission denied.');
        return;
    }
    var findex = files_www_n.indexOf(fpath[1]);
    if (findex != -1) { // file exist
        // Check if the file is owned (e.g. in the cookie)
        if (!readCookie(fpath[1])) {
            globalterm.write('%c(@lightgrey) rm '+fname+': Permission denied.');
            return;
        }
        files_www_n.splice(findex,1);
        files_www_s.splice(findex,1);
        files_www_t.splice(findex,1);
        createCookie(fpath[1],'',0);
    } else {globalterm.write('%c(@lightgrey)'+fname+': No such file or directory.');}
}
function delAllFiles() {
    var allcookies = readAllCookies();
    var deleted = 0;
    for(var i=0;i < allcookies.length;i++) {
        if (allcookies[i] == 'clilastlog' || allcookies[i] == 'style' ||
            allcookies[i] == 'broken') {continue;}

        var fcontent = readCookie(allcookies[i]);
        var date = fcontent.slice(fcontent.length-12);
        if (date.length != 12) {continue;}
        delAFile(allcookies[i]);
        deleted++;
    }
    if (deleted > 0) {
        globalterm.write('%c(@lightgrey) deleted '+deleted+' files%n');
    }
}
function addFile(fname,fcontent,iseditor,fdate) {
    // special rule for unixtoolbox.xhtml because of the %+n style
    if (typeof iseditor == 'undefined') {
        iseditor = false;
    }
    var error = "";
    var fpath = getPath(fname);
    fname = fpath[1];

    if (fname == 'unixtoolbox.xhtml') {
        error = fname+': Permission denied';
        if (iseditor) {
            return 'Save '+error;
        } else {
            globalterm.write('%c(@lightgrey)'+error);
            return error;
        }
    }
    var size = fcontent.length+1;
    var sizestr;
    var datestr;
    if (size < 10) {sizestr = '     '+size;
    } else if (size < 100) {sizestr = '    '+size;
    } else if (size < 1000) {sizestr = '   '+size;
    } else if (size < 10000) {sizestr = '  '+size;}
    if (typeof fdate == 'undefined') {
        var d = new Date();
        var h = d.getHours();
        if (h < 10) {h = '0'+h;}
        var m = d.getMinutes();
        if (m < 10) {m = '0'+m;}
        var day = d.getDate();
        if (day < 10) { day = ' '+day;}
        var mo = shortm[d.getMonth()];
        datestr = mo+' '+day+' '+h+':'+m;
    } else {datestr = fdate;}

    var findex = files_www_n.indexOf(fname);
    if (fpath[0] != '/home/www') {
        error = fname+': Permission denied';
        if (iseditor) {
            return 'Save '+error;
        } else {
            globalterm.write('%c(@lightgrey)'+error);
            return error;
        }
    } else if (findex != -1) { // file exist => check also cookie
        if (!readCookie(fname)) { // this is a system file!
            error = fname+': system file permission denied';
            if (iseditor) {
                return 'Save '+error;
            } else {
                globalterm.write('%c(@lightgrey)'+error);
                return error;
            }
        }
        files_www_n[findex] = fname;
        files_www_s[findex] = sizestr;
        files_www_t[findex] = datestr;
    } else { // new file
        files_www_n.push(fname);
        files_www_s.push(sizestr);
        files_www_t.push(datestr);
    }
    fcontent = fcontent.replace(/;/g, '~~');
    fcontent = fcontent+datestr;
    createCookie(fname,fcontent,365);

    return error;
}
function addAFile(fname) {
    var fcontent = readCookie(fname);
    if (fcontent !== "") {
        var cnt = fcontent.slice(0,fcontent.length-12);
        cnt = cnt.replace(/~~/g, ";");
        var date = fcontent.slice(fcontent.length-12);
        // Don't add dead files which where removed before
        if (date.length == 12) {addFile(fname,cnt,false,date);}
    }
}
function getPath(fname) { // could be name with or w/o path
    var fullpath = '';
    var filename = '';
    var fullname = '';
    var rpath = path;
    // remove end slash
    while (fname.charAt(fname.length-1) == '/' && fname.length > 1) {
        fname = fname.slice(0,fname.length-1);
    }
    var slashindex = fname.lastIndexOf('/');
    if (slashindex == -1 && fname.charAt(0) != '.') {
        filename = fname;
        fullpath = rpath;
    } else {                // we have some path information
        // extract filename first
        filename = fname.slice(slashindex+1); // name is after last /
        if (fname.charAt(0) == '/') { // absolute path
            fullpath = fname.slice(0,slashindex);
            if (fullpath === '') {fullpath = '/';}
        } else if (fname.indexOf('..') === 0 ) { // relative path
            var relarray = fname.split('..');
            var relpath = rpath.split('/');
            if (relpath.length >= relarray.length) { //ok
                for (var i=0; i<relarray.length-1; i++) {
                    rpath = rpath.slice(0,rpath.lastIndexOf('/'));
                }
                var lastrel = fname.lastIndexOf('../');
                if (lastrel != -1) {
                    var pathtoadd = fname.slice(lastrel+3,slashindex);
                    if (pathtoadd.length > 0) {
                    fullpath = rpath+'/'+pathtoadd;
                    } else {
                        fullpath = rpath;
                    }
                } else {
                    fullpath = rpath;
                }
                if (filename == '..') {
                    filename = '';
                    fullname = fullpath;
                } else {
                fullname = fullpath+'/'+filename;
                }

            }

        } else {
            if (rpath == '/') {fullpath = rpath+fname.slice(0,slashindex);}
            else {fullpath = rpath+'/'+fname.slice(0,slashindex);}
        }
    }
    if (fullpath == '/') {fullname = fullpath+filename;}
    else {
        if (fullname.length === 0) {
        fullname = fullpath+'/'+filename;
        }
    }
    return [fullpath,filename,fullname];
}
function longlisting(t,files,opt) {
    if (typeof files == 'undefined') {
        t.write('%c(@lightgrey)Error path does not exist%n');
        return;
    }
    var showmore = false;
    var lines = [];
    if (typeof opt != 'undefined' && opt.indexOf('a') != -1)  {// show all
        t.write(['%c(@lightgrey)drwxrwxr-x   6 sysa  wheel   1024 Feb 12 03:03 ./',
                 'drwxr-xr-x  21 root  wheel    512 Jan 25 00:26 ../%n'
                 ]);
    }

    for (var i=0; i<files[0].length; i++) {
        lines[i] = files[3]+' '+files[1][i]+' '+files[2][i]+' '+files[0][i];
    }

    if (files[0].length > t.conf.rows-2) {showmore = true;}
    t.write(lines,showmore);
}
function listing(t,f) { // extremely inefficient...
    if (typeof f == 'undefined') {
        t.write('%c(@lightgrey)Error path does not exist%n');
        return;
    }
    var files = f;
    //find longest name
    var name_length = 0; // longest file name
    var space_divider = 5;
    var fileslist = [];
    for (var i=0; i<files.length; i++) {
        if (files[i].length > name_length) {name_length = files[i].length;}
    }
    name_length = name_length + space_divider;
    var dividers = Math.round((t.conf.cols-2)/name_length);

    var j=1;
    var thisline = '%c(@lightgrey)';

    for (var k=0; k<files.length; k++) {

        thisline += files[k];
        var this_name_lenth = files[k].length;
        if (files[k] == '%+nunixtoolbox.xhtml%-n') {this_name_lenth = this_name_lenth - 6;}

        var space_missing = name_length - this_name_lenth;
        var space = '';
        while (space_missing > 0) {
            space = space+' ';
            space_missing--;
        }
        thisline += space;
        j++;
        if (j >= dividers) {
            fileslist.push(thisline);
            t.write(thisline+'%n');
            thisline = '%c(@lightgrey)';
            j=1;
        }
    }
    if (j!== 0) {t.write(thisline+'%n');}
    //t.write(fileslist);
}

var uptimed = randomRange(10,380);
var uptime = ' up '+uptimed+' days, 04:32, '+
    randomRange(0,10)+' users, load averages: 0.'+
    randomRange(10,99)+', 0.'+randomRange(10,89)+', 0.'+randomRange(10,69);

///////////////////////////////////////////////////////////////////////
// Commands implementation
//////////////////////////
var clockvisible = false;
stopwatch = false;
var numh = asciin.length;       // heigh of a number
var numw = asciin[0].length/10; // width of a number
var asciistr = [];              // the full ascii (art) array
var r;
var c;
var started;
var now;
var firstline = ''; // 25 25 8 4 = 62
var sp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabscdefghijklmnopqrstuvwxyz23456789#$£@';
var s = ' '; // final char atfer the 12th iteration either ' ' or '1'
var dim = null;
var allRows = [];
var interval = 0; // interval ID
var xperIter = 0; // how many vertical lines per iteration
var mcolors = ['030','033','063','093','393','0c3','3c0','6c3','0f0','6f3','3f0','9f3','ff3','fff'];
var regex = [];   // precompiled regular expressions for matrix color replace

function connectionLost() {
    globalterm.charMode = true;
    globalterm.lock=true;
    globalterm.cursorOff();
    globalterm.newLine();
    globalterm.write("%n%c(@orange)Error: connection reset by peer%n");
    createCookie("broken", "true", 0,1); // lock out for 1 minute
}
function cmdLogin(t) {
    if ((t.argc == t.argv.length) || (t.argv[t.argc] === '')) {
        t.write('%c(@lightgrey)usage: login <username>');
    } else {
        t.env.getPassword = true;
        t.env.username = t.argv[t.argc];
        t.write('%c(@lightgrey)Password: ');
        t.rawMode = true;
        t.lock = false;
        return;
    }
}
function cmdSu(t) {
    t.env.getPassword = true;
    t.env.username = 'root';
    t.write('%c(@lightgrey)Password: ');
    t.rawMode = true;
    t.lock = false;
    return;
}
var uid = randomRange(500,1000);
function cmdId(t) {
    var uidnow = uid;
    if (t.user == 'www') {uidnow = 80;}
    else if (t.user == 'root') {uidnow = 0;}
    t.write('%c(@lightgrey)uid='+uidnow+'('+t.user+') gid='+uidnow+'('+t.user+') groups='+uidnow+'('+t.user+')');
}
function cmdUptime(t) {
    d=new Date();
    t.write('%c(@lightgrey)'+d.milTime()+uptime);
}
function isnumeric(str) {
    for(var i=0; i<str.length; i++)
    {
        var c = str.charAt(i); // char
        var a = c.charCodeAt(0); // ascii code
        if( !(a > 47 && a < 58) && !(a == 45)) {
            return false;
        }
        if (a == 45 && i!== 0){ // char 45 = '-'
            return false;
        }
    }
    return true;
}
function cmdCal(t) {
    if (t.argv.length == 1) {
        d=new Date();
    } else {
        if (t.argv[1]=='-h' || t.argv[1]=='--help') {
            t.write('%c(@lightgrey)display this months calender.%n');
            t.write('%c(@lightgrey)usage: cal [month]%n');
            return;
        } else if (!isnumeric(t.argv[1])) {
            t.write('%c(@lightgrey)usage: cal [month] where [month] is numeric%n');
            return;
        } else {
            now=new Date();
            var year = now.getFullYear();
            var day = now.getUTCDate();
            var month = t.argv[1]-1;
            d=new Date(year,month,day);
        }
    }
    t.write(d.calendar());
}
function cmdLs(t) {
    var findex = 0;
    var fpath = null;
    var longlist = false;
    if (t.argv.length == 1) { // no args direct listing from pwd
        listing(t,tree_files[tree.indexOf(path)][0]);
        return;
    } else if (t.argv[1]=='-l' || t.argv[1]=='-la'|| t.argv[1]=='-al') {
        if (t.argv.length == 2) { // direct long listing from pwd
            longlisting(t,tree_files[tree.indexOf(path)],t.argv[1]);
            return;
        } else { // long listing with path info
            longlist = true;
            fpath = getPath(t.argv[2]);
        }
    } else {fpath = getPath(t.argv[1]);}

    findex = tree.indexOf(fpath[2]);
    if (findex != -1) { // path is OK
        if (longlist) {
            longlisting(t,tree_files[findex],t.argv[1]);
        } else {listing(t,tree_files[findex][0]);}
    } else {t.write('%c(@lightgrey)'+t.argv[1]+': No such file or directory.');}
}
function cmdLl(t) {
    if (t.argv.length == 1) {// no args direct listing from pwd
        longlisting(t,tree_files[tree.indexOf(path)]);
    } else {
        fpath = getPath(t.argv[1]);
        findex = tree.indexOf(fpath[2]);
        if (findex != -1) {longlisting(t,tree_files[findex]);}
        else {t.write('%c(@lightgrey)'+t.argv[1]+': No such file or directory.');}
    }
}
function cmdPwd(t) {
    t.write('%c(@lightgrey)'+path);
}
function cmdCd(t) {
    if (t.argv.length == 1 || t.argv[1] == '~') {
        path = '/home/www';
        t.ps = '['+t.user+'@cb.vu]~>';
        return;
    } else {
        splitpath = getPath(t.argv[1]);
        var findex = tree.indexOf(splitpath[2]);
        if (findex != -1) {
            path = splitpath[2];
        } else {
            t.write('%c(@lightgrey)'+splitpath[2]+': No such file or directory.');
        }
    }
    // Change the prompt
    if (path == '/home/www') {t.ps = '['+t.user+'@cb.vu]~>';}
    else {t.ps = '['+t.user+'@cb.vu]'+path+'>';}
}
function cmdEcho(t) {
    if (t.argv.length != 1 && t.argv[t.argv.length-2] == '>' ) {
        // redirect to a file
        var file = t.argv[t.argv.length-1];
        if (path != '/home/www') {
            t.write('%c(@lightgrey)Permission denied');
            return;
        }
        var fs = '';
        for (var i=1; i<t.argv.length-2; i++) {
            fs+=t.argv[i];
            if (i+1!=t.argv.length-2) {fs+=' ';}
        }
        addFile(file,fs);

    } else if (t.argv.length != 1 && t.argv[1] == '$PATH') {
        t.write('%c(@lightgrey)/bin:/sbin:/etc');
    } else {
        var s='%c(@lightgrey)';
        for (var j=1; j<t.argv.length; j++) {
            s+=t.argv[j];
            if (j+1!=t.argv.length) {s+=' ';}
        }
        t.write(s);
    }
}
function isdir(dirpath) {
    if (tree.indexOf(dirpath) != -1){return true;}
    return false;
}
function isfile(filepath) {
    var fpath = getPath(filepath);
    if (tree.indexOf(fpath[0]) == -1){return false;}
    if (tree_files[tree.indexOf(fpath[0])][0].indexOf(fpath[1]) == -1){return false;}
    return true;
}
function rmdir(dirpath) {
    var fpath = getPath(dirpath);
    for (var j=0;j<3;j++){
        tree_files[tree.indexOf(fpath[0])][j].splice(tree_files[tree.indexOf(fpath[0])][0].indexOf(fpath[1]),1);
    }
    if (isdir(dirpath)){
        tree_files.splice(tree.indexOf(fpath[2]),1);
        tree.splice(tree.indexOf(fpath[2]),1);
    }
}
function rmdirr(dirpath) {
    if (isdir(dirpath)) {
        var fpath = getPath(dirpath);
        var files = tree_files[tree.indexOf(fpath[2])][0];
        while (files.length>0) {
            rmdirr(dirpath+'/'+files[files.length-1]);
        }
    }
    rmdir(dirpath);
}
function cmdRm(t) {

    t.wrap = false;
    if (t.argv.length == 1) {
        t.write('%c(@lightgrey)usage: rm <file>');
        return;
    }

    var rf = false;
    var rootindex = 0;
    var dirindex = 0;
    var fileindex = 0;

    var filearg = t.argv[t.argv.length-1];

    if(t.argv.indexOf('-rf') != -1) {rf = true;}

    if (t.user == 'root') {
        if (filearg == '/' && rf) {
            setTimeout('connectionLost()',15000);
            filearg = '/bin';
        }
        var fpath = getPath(filearg);
        var fname = fpath[1]; // file name
        var lpath = fpath[0]; // path name
        var fullname = fpath[2]; // full path + name

        rootindex = tree.indexOf(lpath);
        if (rootindex != -1) { // path is OK
            // check for directory
            dirindex = tree.indexOf(fullname);
            fileindex = tree_files[rootindex][0].indexOf(fname);
            if (isdir(fullname)) { // a directory
                if (rf) {rmdirr(fullname);}
                else {t.write('rm: cannot remove '+filearg+': Is a directory%n');}
            } else { // a file
                if (fileindex != -1) { // file name is OK
                    for (var i=0;i<3;i++){tree_files[rootindex][i].splice(fileindex,1);}
                } else {t.write('rm: cannot remove '+fname+': No such file or directory%n');}
            }
        } else {t.write('rm: cannot remove '+lpath+': No such file or directory%n');}

    } else { // normal user
        if (filearg=='/') {
            t.write('%c(@lightgrey)I\'m sorry Dave, I\'m afraid I can\'t do that.');
        } else if (t.argv[1] =='*') {
            delAllFiles();
        } else {
            delAFile(filearg);
        }
    }
}
function cmdPing(t) {
    var host;
    if (t.argv.length == 1) {host="";}
    else {host = t.argv[1];}
    // This is asynchronous!
    t.rawMode = true;
    fetchHttp("http://cb.vu/ping.php?host="+host,displayraw);
}
function cmdWhereami(t) {
    if (typeof vgeoip_country_code == 'undefined') {initGeoIP();}
    t.write('%c(@lightgrey)Your IP:  '+clientip+'%n');
    t.write('%c(@lightgrey)Country:  %c(@chartreuse)'+vgeoip_country_name+
            ' ('+vgeoip_country_code+')%n');
    t.write('%c(@lightgrey)City:     %c(@chartreuse)'+vgeoip_city+'%n');
    t.write('%c(@lightgrey)Position: %c(@chartreuse)'+
            vgeoip_latitude+'%c(@lightgrey) (latitude) - %c(@chartreuse)'+
            vgeoip_longitude+'%c(@lightgrey) (longitude)%n');
}
function cmdWeather(t) {
    t.write('%c(@lightgrey)See also %c(@chartreuse)man weather%c(@lightgrey) for more options%n');
    var location;
    var wunits = '&u=m';
    var forecast = '&f=n';
    var findex = -1;
    // get the units
    if (t.argv.length >= 2) {findex = t.argv.indexOf('-i');}
    if (findex != -1) {
        wunits = '&u=i'; // imperial units
        t.argv.splice(findex,1);
        findex = -1;
    }
    if (t.argv.length >= 2) {findex = t.argv.indexOf('-f');}
    if (findex != -1) {
        forecast = '&f=y';
        t.argv.splice(findex,1);
    }
    if (t.argv.length == 1) {
        if (typeof vgeoip_country_code == 'undefined') {initGeoIP();}
        if (vgeoip_city == "N/A") {
            t.write("%c(@orangered)Unknown city, please provide a city name as argument");
            return;
        }
        location=vgeoip_city+','+vgeoip_country_name;
    } else {location = t.argv[1];}
    // This is asychronous
    t.rawMode = true;
    t.write('%c(@lightgrey)Trying "'+location+'"%n');
    fetchHttp("http://cb.vu/w.php?city="+location+wunits+forecast,displayraw);
}
function cmdBrowser(t) {
    t.write([
                '%c(@lightgrey)Some browser information:',
                'IP address:          '+clientip,
                'Navigator:           %c(@chartreuse)'+navigator.appCodeName+' '+
                navigator.appName+' '+navigator.appVersion,
                '%c(@lightgrey)User agent:          %c(@chartreuse)'+navigator.userAgent,
                '%c(@lightgrey)Operating system:    %c(@chartreuse)'+navigator.platform,
                '%c(@lightgrey)Page hostname:       %c(@chartreuse)'+location.hostname,
                '%c(@lightgrey)Screen/browser size: %c(@chartreuse)'+screen.width+'x'+screen.height+'/'+
                browserWidth()+'x'+browserHeight()+' %c(@lightgrey)pixels'
             ]);
}
function cmdUname(t) {
    if (t.argv.length == 1 || t.argv[1]=='-s') {t.write('%c(@lightgrey)FreeBSD');}
    else if (t.argv[1]=='-i') {t.write('%c(@lightgrey)CB');}
    else if (t.argv[1]=='-m' || t.argv[1]=='-p') {t.write('%c(@lightgrey)i386');}
    else if (t.argv[1]=='-n') {t.write('%c(@lightgrey)cb.vu');}
    else if (t.argv[1]=='-a') {t.write('%c(@lightgrey)FreeBSD cb.vu 7.1-STABLE FreeBSD 7.1-STABLE #2: Wed Jan 30 16:21:05 CET 2009 c@cb.vu:/usr/obj/usr/src/sys/CB  i386');}
    else if (t.argv[1]=='-v') {t.write('%c(@lightgrey)FreeBSD 7.1-STABLE #2: Wed Jan 30 16:21:05 CET 2009 c@cb.vu:/usr/obj/usr/src/sys/CB');}
    else if (t.argv[1]=='-r') {t.write('%c(@lightgrey)7.1-STABLE');}
    else {
        t.write([
                    '%c(@lightgrey)uname: illegal option -'+t.argv[1],
                    'usage: uname [-aimnprsv]'
                 ]);
    }
}
function cmdHostname(t) {
    if (t.argv.length == 1 || t.argv[1]=='-f') {t.write('%c(@lightgrey)cb.vu');}
    else if (t.argv[1]=='-s') {t.write('%c(@lightgrey)cb');}
    else if (t.argv[1]=='-i') {t.write('%c(@lightgrey)78.31.70.238');}
    else {
        t.write([
                    '%c(@lightgrey)uname: illegal option -'+t.argv[1],
                    'usage: hostname [-fsi]'
                 ]);
    }
}
function cmdReset(t) {
    t.write(' ');
    t.clear();
    t.rawMode = true;
    t.open();
    return;
    //t.rawMode = false;
}
function cmdCat(t,iseditor,filename) {
    var error = "ok";
    if (t.argv.length == 1 && !iseditor) {
        t.write('%c(@lightgrey)usage: cat file');
        return error;
    }
    if (typeof filename == 'undefined'){filename = t.argv[1];}
    var fpath = getPath(filename);
    var fname = fpath[1];
    var lpath = fpath[0];
    var fullname = fpath[2];
    var cnt;

    var tindex = tree.indexOf(lpath);
    if (tindex == -1) {
        error = "Error: "+lpath+" wrong path";
        return error;
    } // wrong path

    var findex = tree_files[tindex][0].indexOf(fname);
    if (findex != -1 || fname == 'unixtoolbox.xhtml') { // file exist on array
        var fcontent = readCookie(fname);
        if (fcontent) {
            cnt = fcontent.slice(0,fcontent.length-12);
            cnt = cnt.replace(/~~/g, ";");
            t.write('%c(@lightgrey)'+cnt+'%n');
            return error;
        }

        cnt = filesContent[fullname];
        if (typeof cnt != 'undefined' && cnt != 'undefined') {
            t.write(cnt);
        } else {
            if (remote_files.indexOf(fname) != -1) { // remote file
                cnt = filesContent[fullname];
                t.write('%c(@lightgrey)'+cnt+'%n');
            } else if (binary_files.indexOf(fname) != -1) { // binary files
                if (iseditor) {
                    error = " binary file";
                } else {
                    window.location = 'http://cb.vu/'+fname;
                }
            } else {
                error = fname+': Permission denied';
                if (iseditor) {
                    return 'Open '+error;
                } else {
                    t.write('%c(@lightgrey)cat : '+error+'%n');
                }
            }
        }
    } else {
        if (!iseditor) { // not found error only ouside editor mode
            t.write('%c(@lightgrey)cat : '+fname+' : File not found%n');
        } else {
            error = "";
        }
    }
    return error;
}
function cmdMan(t) {
    if (t.argv.length == 1) {
        t.write('%c(@lightgrey)usage: man <command>%n');
        t.write('%c(@lightgrey)The following man pages are available, or use apropos on any command.%n');
        listing(t,files_man[0]);
        return;
    }
    var cmd = t.argv[1];
    if (files_man_n.indexOf(cmd) != -1) {
        var dim = t.getDimensions();
        var file = filesContent['/usr/share/man/'+cmd];
        if (file.length > t.conf.rows-1) {
            t.write(file,true);
        } else {
            t.write(file);
        }
    }
    else {t.write('%c(@lightgrey)No manual entry for '+cmd);}
}
function cmdMore(t) {
    if (t.argv.length == 1) {
        t.write('%c(@lightgrey)usage: more <file>');
        return;
    }

    var fpath = getPath(t.argv[1]);
    var fname = fpath[1];
    var lpath = fpath[0];
    var fullname = fpath[2];
    var cnt;
    var findex;

    var tindex = tree.indexOf(lpath);
    if (tindex == -1) {return;} // wrong path

    if (lpath == '/home/www') {
        findex = tree_files[tindex][0].indexOf(fname);
        if (findex != -1) { // file exist on array
            t.clear();
            var fcontent = readCookie(fname);
            if (fcontent) {
                cnt = fcontent.slice(0,fcontent.length-12);
                cnt = cnt.replace(/~~/g, ";");
                t.write('%c(@lightgrey)'+cnt+'%n');
                return;
            } else if (fname == 'sitemap.xml') {
                t.write(file_sitemap,true);
                return;
            } else if (fname == 'cb.txt') {
                t.write(file_cb,true);
                return;
            } else if (fname == 'about.txt') {
                t.write(file_about,true);
                return;
            } else if (fname == 'bugs.txt') {
                t.write(file_bugs,true);
                return;
            }
        }
        if (remote_files.indexOf(fname) != -1) { // remote file needs to be fetched
            t.rawMode = true;
            t.write('%c(@lightgrey)Patience...%n');
            fetchHttp('http://cb.vu/'+fname,displaymore);
        } else if (binary_files.indexOf(fname) != -1) { // binary files
            t.write('%c(@lightgrey)Binary file. Use pr instead');
        } else {t.write('%c(@lightgrey)File not found.');}
    } else if (lpath == '/etc') {
        findex = tree_files[tindex][0].indexOf(fname);
        if (findex != -1) { // file exist on array
            cnt = filesContent[fullname];
            if (typeof cnt != 'undefined') {
                t.clear();
                t.write(cnt);
            }
            else {t.write('%c(@lightgrey)'+fname+' : Permission denied%n');}
        } else {t.write('%c(@lightgrey)'+fname+' : File not found%n');}
    }
}

function cmdPr(t) {
    if (t.argv.length == 1) {t.write('%c(@lightgrey)usage: pr file');}
    else {window.location = t.argv[1];}
}

function cmdRedim(t,manual) {
    var oldie = false;
    if (typeof document.documentElement.style.maxHeight == "undefined") {oldie = true;}
    if (navigator.appVersion.indexOf('Safari') != -1) {safari = true;}
    var dim = t.getDimensions();
    var neww = Math.round((t.conf.cols/dim.width)*browserWidth())-2;
    var newh = Math.round((t.conf.rows/dim.height)*browserHeight())-1;
    if (oldie) {
        t.write('Using IE6 hack%n');
        neww = neww-2;
        //newh--;
    }
    if ((t.argv) && t.argv.length > 1  || manual) {
        t.write('Terminal dimentions in px:       '+dim.width+' x '+dim.height+' px%n');
        t.write('Browser window dimentions in px: '+browserWidth()+' x '+browserHeight()+' px%n');
        t.write('Terminal columns x rows:         '+t.conf.cols+' x '+t.conf.rows+' char%n');
        t.write('Maximal columns x rows:          '+neww+' x '+newh+' char%n');
    } else if (!(t.argv) || t.argv.length == 1) {
        if (neww !== 0) {
            t.resizeTo(neww,newh);
            t.maxCols = neww;
            t.maxLines = newh;
            if (neww < (6*asciinumber[0].length/10)+(2*asciiddot[0].length)) {
                asciin = asciinumber_s;
                asciid = asciiddot_s;
            } else {
                asciin = asciinumber;
                asciid = asciiddot;
            }
            numh = asciin.length;       // heigh of a number
            numw = asciin[0].length/10; // width of a number
        }
    }
}
function redim() {cmdRedim(globalterm);}
function cmdTime(t) {
    var d = new Date();
    t.write('%c(@lightgrey)'+d.milTime());
}
function displayNum(str,center) {
    var n = 0;   // n is the number to display
    for (var i=0;i<numh;i++) {asciistr[i] = '';}// initialize asciistr to empty
    for (var k=0;k<str.length;k++) {
        if (str.charAt(k) == ':') {
            for (var j=0;j<numh;j++) {asciistr[j] = asciistr[j] + asciid[j];}
        } else {
            n = str.charAt(k);
            for (var l=0;l<numh;l++) {
                asciistr[l] = asciistr[l] + asciin[l].slice(n*numw,(n*numw)+numw);
            }
        }
    }
    if (!center) {globalterm.write(s);}
    else {
        var r = Math.round(globalterm.conf.rows/2) - Math.round(numh/2);
        var c = Math.round((globalterm.conf.cols-asciistr[0].length)/2);
        for (var m=0;m<asciistr.length;m++) {
            globalterm.typeAt(r+m,c,asciistr[m],3*256);
        }
    }
}
function clockHandler(initterm) {
    if (initterm) {
        initterm.env.handler = initterm.handler;
        initterm.cursorOff();
        // Init the rows and cols position (top left) for the seconds field
        asciistr = [];
        numh = asciin.length;       // heigh of a number
        numw = asciin[0].length/10; // width of a number
        r = Math.round(globalterm.conf.rows/2) - Math.round(numh/2);
        c = Math.round((globalterm.conf.cols - (6*numw) - 2*asciid[0].length)/2) + (4*numw) + 2*asciid[0].length;
        return;
    }

    this.lock=true;
    var key = this.inputChar;
    if (key == 32) { // space = pause
        if (interval === 0) {
            interval = setInterval ('carriageReturn()', 1000 );
        } else {
            clearInterval(interval);
            interval = 0;
        }
    } else if (key == 114) { // r = reset
        started = new Date();
    } else if (key != globalterm.termKey.CR) {  // any key to quit
        clearInterval(interval);
        interval = 0;
        clockvisible = false;
        stopwatch = false;
        this.charMode = false;
        this.handler = this.env.handler;
        this.clear();
        this.prompt();
        return;
    } else {
        // fixed size time display: 00:00:00
        now = new Date();
        var h;
        var m;
        var s;
        if (!stopwatch) {
            h = now.getHours();
            m = now.getMinutes();
            s = now.getSeconds();
        } else {
            var diff=(now - started)/1000;
            s = Math.floor(diff % 60);
            diff=diff/60;
            m = Math.floor(diff % 60);
            diff=diff/60;
            h = Math.floor(diff % 24);
        }
        var sh = ''+h;
        var sm = ''+m;
        var ss = ''+s;
        if (h < 10) {sh = '0'+h;}
        if (m < 10) {sm = '0'+m;}
        if (s < 10) {ss = '0'+s;}

        if (!clockvisible) {// first display
            displayNum(sh+':'+sm+':'+ss,true);
            clockvisible = true;
        } else if (s < 2) {displayNum(sh+':'+sm+':'+ss,true);} // display full time string
        else { // display only the seconds to spare CPU time
            for (var j=0;j<numh;j++) {
                asciistr[j] = '' +
                    asciin[j].slice(ss.charAt(0)*numw,
                                    (ss.charAt(0)*numw)+numw) +
                    asciin[j].slice(ss.charAt(1)*numw,
                                    (ss.charAt(1)*numw)+numw);
            }
            for (var i=0;i<asciistr.length;i++) {this.typeAt(r+i,c,asciistr[i],3*256);}
        }
    }
    this.lock = false;
}
function cmdClock(t) {
    started = new Date();
    var findex = -1;
    if (t.argv.length >= 2) {findex = t.argv.indexOf('-t');}
    if (findex != -1) {
        stopwatch = true;
        t.argv.splice(findex,1);
        findex = -1;
    }
    if (t.argv.length >= 2) {findex = t.argv.indexOf('-s');}
    if (findex != -1) {
        asciin = asciinumber_s;
        asciid = asciiddot_s;
        t.argv.splice(findex,1);
        findex = -1;
    } else if (t.conf.cols > (6*asciinumber[0].length/10)+(2*asciiddot[0].length)) {
        asciin = asciinumber;
        asciid = asciiddot;
    }

    t.charMode = true;
    t.cursorOff();
    t.clear();
    clockHandler(t);
    interval = setInterval ('carriageReturn()', 1000 );
    t.handler = clockHandler;
    t.lock = false;
    return;
}
function setNormal() {
    term.conf.bgColor = '#181818';
    term.rebuild();
}
function setColor(color) {
    term.conf.bgColor = color;
    term.rebuild();
    globalterm.write(' ');
}

var bootline = 0;
var booting = false;
var sdnotifed = false;
var rebootask1 = false;
var rebootask2 = false;
var rebootask3 = false;
var beenhere = false;
function rebootHandler(initterm) {

    if (initterm) {
        initterm.env.handler = initterm.handler;
        if (beenhere) {
            initterm.write('%c(@orange)You again?? %c(@lightgrey)Alright you want to reboot, but are you sure?');
        } else {
        initterm.write('%c(@lightgrey)So you want to reboot. Are you sure?');
        }
        return;
    }
    this.newLine();
    this.charMode = false;
    this.lock=true;

    if (this.isPrintable(key)) {
        // printable char - just type it
        var ch = String.fromCharCode(key);
        this.type(ch);
    }

    if (!rebootask1) {
        beenhere = true;
        this.cursorOn();
        if (this.lineBuffer == 'yes') {
            rebootask1 = true;
            this.write('%c(@lightgrey)Are you really sure you know which machine is actually going to reboot?');
            this.newLine();
        } else if (this.lineBuffer == 'no') {
            this.write('%c(@lightgrey)Good choice! Go play with the other commands.');
            this.charMode = false;
            this.handler = this.env.handler;
            this.prompt();
            return;

        } else if (this.lineBuffer) {
            this.write('%c(@lightgrey)answer yes or no');
            this.newLine();
        }
        this.lock = false;
        this.lineBuffer = '';
        return;
    } else if (!rebootask2) {
        this.cursorOn();
        if (this.lineBuffer == 'yes') {
            rebootask2 = true;
            this.write('%c(@lightgrey)So will that be yours or mine? Answer "yours" or "mine" or "quit"');
            this.newLine();
        } else if (this.lineBuffer == 'no') {
            this.write('%c(@lightgrey)I don\'t know either :o)');
            rebootask1 = false;
            this.charMode = false;
            this.handler = this.env.handler;
            this.prompt();
            return;

        } else if (this.lineBuffer) {
            this.write('%c(@lightgrey)answer with yes or no');
            this.newLine();
        }
        this.lock = false;
        this.lineBuffer = '';
        return;
    } else if (!rebootask3) {
        this.cursorOn();
        if (this.lineBuffer == 'yours' || this.lineBuffer == 'mine') {
            this.cursorOff();
            rebootask3 = true;
            this.write('%c(@lightgrey)So you mean yours....OK you asked for it.');

            // OK start shutdown interval for the first notification
            setTimeout('carriageReturn()',2000);
        } else if (this.lineBuffer == 'quit') {
            rebootask1 = false;
            rebootask2 = false;
            rebootask3 = false;
            this.write('%c(@lightgrey)whimp :o).');
            this.charMode = false;
            this.handler = this.env.handler;
            this.prompt();
            return;
        } else if (this.lineBuffer) {
            this.write('Answer "yours" or "mine" or "quit"');
            this.newLine();
        }
        this.lock = false;
        this.lineBuffer = '';
        return;
    }
    // normal sequence
    this.lock=true;
    var key = this.inputChar;
    this.cursorOff();

    if (key == 32) { // space = pause
        if (interval === 0) {
            interval = setInterval ('carriageReturn()', 300 );
        } else {
            clearInterval(interval);
            interval = 0;
        }
    } else if (!sdnotifed && !booting) {
        // this is the first shutdown notification message
        this.newLine();
        this.write([   '%n%n%n%c(@orange)Shutdown at '+Date(),
                       '%c(@chartreuse)shutdown: [pid '+randomRange(189,21000)+']',
                       'root:{'+randomRange(70,150)+'}'+path,
                       '%n%n*** System shutdown message from '+clientip+' ***',
                       'Sytem going down in 4 seconds%c()%n%n%n']);
        this.write('Send SIGTERM to all processes%n');
        this.write(pslong);
        this.newLine();
        this.write('%n%n');
        sdnotifed = true;
        // OK start shutdown interval
        setTimeout('interval = setInterval (\'carriageReturn()\', 300 )',4000);
    } else if (!booting && sdnotifed) {
        // shutdown sequence comes after the notification
        if (bootline == filesContent['/boot/shutdown'].length-1) {
            bootline = 0;
            clearInterval(interval);
            interval = 0;
            this.clear();
            term.conf.bgColor = 'blue';
            term.rebuild();
            this.write(' ');
            booting = true;
            setTimeout('setColor(\'#ffffff\')',1200);
            setTimeout('setNormal()',1600);
            setTimeout('interval = setInterval (\'carriageReturn()\', 300 )',2500);

        } else { // normal shutdown sequence
            this.write(filesContent['/boot/shutdown'][bootline]);
            bootline++;
            if (bootline == filesContent['/boot/shutdown'].length-1) {
                clearInterval(interval);
                interval = setInterval ('carriageReturn()', 4000 );
            }
        }
    } else {
        if (bootline == filesContent['/boot/kernel'].length-1) {
            clearInterval(interval);
            interval = 0;
            bootline = 0;
            booting = false;
            rebootask1 = false;
            rebootask2 = false;
            this.newLine();
            cmdRedim(this,true);
            this.charMode = false;
            this.handler = this.env.handler;
            this.cursorOn();

            setTimeout('globalterm.clear()',3000);
            setTimeout('location.reload()',3500);

        } else { // normal boot sequence
            this.write(filesContent['/boot/kernel'][bootline]);
            bootline++;
        }
    }
    this.lock = false;
}
function cmdReboot(t) {
    if (t.user != 'root') {
        t.write("%c(@lightgrey)You must be root to do this");
        return;
    }
    t.charMode = true;
    rebootHandler(t);
    t.handler = rebootHandler;
    setTimeout ('carriageReturn()', 100 );
    t.lock = false;

    return;
}

function cmdNum(t) {
    if (t.argv.length == 1) {t.write('%c(@lightgrey)usage: num number');}
    asciistr = [];
    displayNum(t.argv[1],true);
}
function randomScreen(isgame) {
    globalterm.wrap = true;
    var maxr = 0;
    allRows = [];
    globalterm.clear();
    if (typeof isgame == 'undefined') {
        isgame = false;
    }
    if (isgame) {
        maxr = globalterm.conf.rows-2;
    } else {
        maxr = globalterm.conf.rows;
    }
    firstline = "";
    for (var j=0;j <= maxr;j++) {
        for (var i=0;i < globalterm.conf.cols;i++) {
            if (isgame) {
                if (i===0 || i == globalterm.conf.cols-1) { // left and right frame
                    firstline += '*';
                    continue;
                }
                if (randomRange(1,250) <= snakefood) {
                    firstline += randomRange(1,9);
                } else {
                    firstline += ' ';
                }

            } else {
                firstline += String.fromCharCode(randomRange(38,126));
            }
        }
        allRows.push(firstline);
        firstline = "";
    }
    // game border
    if (isgame) {
        for (var k=0;k < globalterm.conf.cols;k++) { // top and bottom frame
            firstline += '%c(@lightgrey)*';
        }
        allRows[0] = allRows[maxr] = firstline;

        // add rocks
        var nrocks = Math.round((globalterm.conf.cols*globalterm.conf.rows)/snakerocks);
        for (var rocks=0;rocks<nrocks;rocks++) {
            var rockr = randomRange(2,globalterm.conf.rows-9);
            var rockc = randomRange(2,globalterm.conf.cols-7);
            var rockchar = '';
            for (var kr=0;kr<4;kr++) {
                if ( kr > 0 && kr < 3) { rockchar = "#####";}
                else if (kr === 0) { rockchar = ",###,";}
                else if (kr == 3) { rockchar = "'###'";}
                allRows[rockr+kr] = allRows[rockr+kr].slice(0,rockc)+
                    rockchar+allRows[rockr+kr].slice(rockc+5);

            }
        } // add orange color for the stones
        for (var l=0;l<allRows.length;l++) {
            allRows[l] = allRows[l].replace(/#/g, "%c(@orange)#%c(@lightgrey)");
            allRows[l] = allRows[l].replace(/,/g, "%c(@orange),%c(@lightgrey)");
            allRows[l] = allRows[l].replace(/\'/g, "%c(@orange)'%c(@lightgrey)");
        }

    }
    return allRows;
}
function cmdRandom(t) {
    //screen = randomScreen();
    if (t.argv.length == 2 && t.argv[1] == 'n') {
        t.write(randomScreen(true));
    } else {
        t.write(randomScreen());
    }
}
function iterateArray(write) {
    if (Math.round(Math.random()-0.40) === 0) {s = ' ';}
    else {s = '1';}

    for (i=0;i<mcolors.length;i++) {  // prepare the next top line
        if (i === 0) {repl = s;}
        else {repl = '%c(#'+mcolors[i-1]+')'+sp.charAt(randomRange(0,61));}
        firstline = firstline.replace(regex[i],repl);
    }
    repl = '%c(#fff)'+sp.charAt(randomRange(0,61));
    for (i=0;i<xperIter;i++) {       // create the new verticals
        var p = randomRange(0,firstline.length);
        if (firstline.charAt(p) == ' ' || firstline.charAt(p) == '1') {
            firstline = firstline.slice(0,p)+'%c(#fff)#'+firstline.slice(p+1);
        }
    }

    var rowtochange = randomRange(1,allRows.length-1);
    allRows[rowtochange] = allRows[rowtochange].replace(regex[mcolors.length],repl);
    allRows.unshift(firstline);
    allRows.pop();

    if (write) {globalterm.write(allRows);}
}

var matrixrounds;
var matrixemptystart = false;
function matrixHandler(initterm) {
    var repl;
    var i=0;

    if (initterm) {
        if (initterm.argv.indexOf('-s') != -1) {
            matrixemptystart = true;
        } else {
            matrixemptystart = false;
        }
        matrixrounds = globalterm.conf.rows * 3;
        firstline = ''; // reset and precompile the regexp
        xperIter = Math.round(globalterm.conf.cols/45); //new cols per iteration
        initterm.env.handler = initterm.handler;
        dim = initterm.getDimensions();

        for (i=0;i<mcolors.length;i++) {regex[i] = eval('\/%c\\(#'+mcolors[i]+'\\).\/g');}
        regex[mcolors.length] = eval('\/%c\\(#fff\\).\/g'); //only change white char
        for (i=0;i < initterm.conf.cols-1;i++) {firstline = firstline+' ';}
        for (i=0;i <=initterm.conf.rows;i++) {allRows[i] = firstline;}

        return;
    }

    this.lock=true;
    // Check pressed key
    var key = this.inputChar;
    if (key == 32) { // space = pause
        if (interval === 0) {
            interval = setInterval ('carriageReturn()', 1000 );
        } else {
            clearInterval(interval);
            interval = 0;
        }
    }
    if (key == 113 || key == termKey.ESC) {  // "q, ESC" => quit
        clearInterval(interval);
        interval = 0;
        this.charMode = false;
        this.handler = this.env.handler;
        this.clear();
        this.prompt();
        return;
    } else {

        if (!matrixemptystart && matrixrounds > 0) {
            while (matrixrounds > 0) {
                iterateArray(false);
                matrixrounds--;
            }
        }
        iterateArray(false);
        this.write(allRows);
    }

    this.lock = false;
}
function cmdMatrix(t) {
    t.cursorOff();
    t.charMode = true;
    t.write('%c(@lightgrey)Use q or ESC to quit. Space to pause%n');
    t.write('%c(@lightgrey)  -s for empty start%n');
    t.write('%c(@lightgrey)  See also man matrix%n');
    matrixHandler(t);
    interval = setInterval ('carriageReturn()', 1200 );
    t.handler = matrixHandler;
    t.lock = false;
    return;
}
function init(t) {
    var numproc = randomRange(9,12);
    var h = randomRange(0,9);
    var m = randomRange(10,59);
    for (var i=0;i<numproc;i++) {
        var s = randomRange(10,59);
        pslong.push('%c(@lightgrey)www  '+randomRange(1000,5100)+'  0.0  1.5 '+
                    randomRange(10000,51000)+' '+randomRange(10000,51000)+
                    ' ??  I      '+h+':'+m+'.'+s+' /usr/local/sbin/httpd');
    }
}
function cmdPs(t) {
    var numproc = randomRange(8,14);
    var h = randomRange(0,9);
    var m = randomRange(10,59);
    if (t.argv.length == 1) {

        t.write('%c(@lightgrey)PID  TT  STAT      TIME COMMAND%n');
        for (var i=0;i<numproc;i++) {
            var s = ((i*13)+10)%60;
            s = (s<10) ? 10 : s;
            t.write('%c(@lightgrey)'+randomRange(1000,5100)+' ??  I      '+h+':'+m+'.'+s+' /usr/local/sbin/httpd%n');
        }
    } else {
        t.write(pslong);
    }
}
function cmdFortune(t) {
    t.write(varfortune[fortuneid]);
    fortuneid++;
    fortuneid=fortuneid%3;
    if (fortuneid === 0) { // get new round (array of 3 fortunes)
        fetchHttp("http://cb.vu/fortune.js.php",eval);
    }
}
function cmdWhatis(t) {
    if (t.argv.length == 1) {t.write('%c(@lightgrey)usage: whatis/apropos <command>');}
    else if (t.argv[1] == 'help') {t.write('%c(@lightgrey)display the help message');}
    else if (t.argv[1] == 'info') {t.write('%c(@lightgrey)display the info message with credentials');}
    else if (t.argv[1] == 'clear') {t.write('%c(@lightgrey)clear the terminal');}
    else if (t.argv[1] == 'echo') {t.write('%c(@lightgrey)echo the arguments or create a file with >');}
    else if (t.argv[1] == 'ls'||t.argv[1] == 'll') {t.write('%c(@lightgrey)list directory contents');}
    else if (t.argv[1] == 'cd') {t.write('%c(@lightgrey)change working directory');}
    else if (t.argv[1] == 'rm') {t.write('%c(@lightgrey)delete a file mostly for root only');}
    else if (t.argv[1] == 'uname') {t.write('%c(@lightgrey)display system identification');}
    else if (t.argv[1] == 'whoami') {t.write('%c(@lightgrey)display effective user id');}
    else if (t.argv[1] == 'whereami') {t.write('%c(@lightgrey)display you probable position with country and city');}
    else if (t.argv[1] == 'weather') {t.write('%c(@lightgrey)display weather information based on your location');}
    else if (t.argv[1] == 'who') {t.write('%c(@lightgrey)display who is on the system');}
    else if (t.argv[1] == 'id') {t.write('%c(@lightgrey)return user identity');}
    else if (t.argv[1] == 'matrix') {t.write('%c(@lightgrey)show a matrix like screen saver (it is CPU hungry)');}
    else if (t.argv[1] == 'more') {t.write('%c(@lightgrey)display a file with paging function');}
    else if (t.argv[1] == 'pwd') {t.write('%c(@lightgrey)return working directory name');}
    else if (t.argv[1] == 'cat') {t.write('%c(@lightgrey)concatenate and print files');}
    else if (t.argv[1] == 'chat') {t.write('%c(@lightgrey)chat with the terminal chatbot');}
    else if (t.argv[1] == 'hostname') {t.write('%c(@lightgrey)set or print name of current host system');}
    else if (t.argv[1] == 'ps') {t.write('%c(@lightgrey)process status');}
    else if (t.argv[1] == 'pr') {t.write('%c(@lightgrey)print files on the browser');}
    else if (t.argv[1] == 'browse') {t.write('%c(@lightgrey)display the file on the browser');}
    else if (t.argv[1] == 'browser') {t.write('%c(@lightgrey)display your IP address and browser information');}
    else if (t.argv[1] == 'cal') {t.write('%c(@lightgrey)displays a calendar');}
    else if (t.argv[1] == 'uptime') {t.write('%c(@lightgrey)show how long system has been running');}
    else if (t.argv[1] == 'date') {t.write('%c(@lightgrey)display date and time');}
    else if (t.argv[1] == 'time') {t.write('%c(@lightgrey)time command execution');}
    else if (t.argv[1] == 'clock') {t.write('%c(@lightgrey)display a full screen clock or stopwatch with the option -t');}
    else if (t.argv[1] == 'top') {t.write('%c(@lightgrey)display information about the top cpu processes');}
    else if (t.argv[1] == 'df') {t.write('%c(@lightgrey)display free disk space');}
    else if (t.argv[1] == 'history') {t.write('%c(@lightgrey)display the last used commands');}
    else if (t.argv[1] == 'fortune') {t.write('%c(@lightgrey)print a random, hopefully interesting, adage');}
    else if (t.argv[1] == 'su') {t.write('%c(@lightgrey)substitute user identity');}
    else if (t.argv[1] == 'ssh') {t.write('%c(@lightgrey)ssh connection using the mindterm java terminal');}
    else if (t.argv[1] == 'vi') {t.write('%c(@lightgrey)vi the editor!');}
    else if (t.argv[1] == 'snake') {t.write('%c(@lightgrey)A variation of the classical snake game');}
    else if (t.argv[1] == 'invaders') {t.write('%c(@lightgrey)The invaders game provided by Norbert Landsteiner');}
    else if (t.argv[1] == 'logout'||t.argv[1] == 'exit') {t.write('%c(@lightgrey)Exit and logout from the terminal');}
    else if (t.argv[1] == 'reset') {t.write('%c(@lightgrey)reset the terminal as it\'s initial state');}
    else if (t.argv[1] == 'reload') {t.write('%c(@lightgrey)reload the web page');}
    else if (t.argv[1] == 'ping') {t.write('%c(@lightgrey)ping a host, or yourself when no argument is given');}
    else {t.write('%c(@lightgrey)'+t.argv[1]+': nothing appropriate');}
}
// global vi var
var viquit = false;
var visave = false;
var viforce = false;
var viopen = false;
var viedit = false;
var visaved = true;
var visplvis = false;
var vicmd = "";
var vifile = "";
function readOneLine(t,row) {
    var c=0;
    var line="";
    while (t.isPrintable(t.charBuf[row][c]) && c<t.maxCols) {
        line += String.fromCharCode(t.charBuf[row][c]);
        c++;
    }
    return line;
}
function removeLine(t,row) {
    var l=0;
    var content = "";
    for (var r=row; r<t.maxLines-1; r++) {
        content = readOneLine(t,r+1);
        t.typeAt(r,0,content);
        t.c = content.length;
        t.r = r;
        while (t.isPrintable(t.charBuf[r][t.c])) {
            t.fwdDelete();
        }
        l++;
        if (t.charBuf[r][0] == 126) {break;}
    }
    t.c = 0;
    t.r = row;
}
function viSplash(t) {
    var splash = [
        '                    Vi',
        '',
        '           version 0.1 alpha :o)',
        '',
        '   <ESC>        to enter command mode',
        '   :q<Enter>    to exit',
        '   :w<Enter>    to save',
        '   :w filename  to save to "filename"',
        '   :e filename  to open "filename"',
        '   :q!<Enter>   to exit without saving',
        '   D            to delete rest of line',
        '   dd           to delete current line',
        '   x            to delete current char',
        '   i            to enter edit mode    ',
        '   UP RIGHT DOWN LEFT to move the cursor',
        '   or h left  j down  k up  l right',
        '',
        'Paging is not possible, sorry. Only one',
        'window (or page) can be edited at a time.',
        '',
        'both vi *and* Emacs are just too damn slow',
        'Use ED! See man ed'];
    if (safari) {
        splash.push('On Safari browsers use <TAB> instead of <ESC>');
    }
    visplvis = true;
    centerSplash(t,splash);
}
function centerSplash(t,splash) {
    var sh = splash.length;
    var sw = 0;
    for (var i=0; i<sh; i++) {
        if (splash[i].length > sw) {sw = splash[i].length;}
    }
    var r = Math.round(t.conf.rows/2) - Math.round(sh/2) - 3;
    var c = Math.round(t.conf.cols/2) - Math.round(sw/2);
    if (r<0) {r = 0;}
    for (var m=0;m<sh;m++) {
        if (m<16) {t.typeAt(r+m,c,splash[m],7*256);}
        else {t.typeAt(r+m,c,splash[m],5*256);}
    }
}
function saveFile(t,fname) {
    var content="";
    for (var r=0; r<t.maxLines-1; r++) {
        if (t.charBuf[r][0] != 126) {
            content += readOneLine(t,r) + '%n';
        }
    }
    content = content.slice(0,content.length-2);
    var error = addFile(fname,content,true);
    if (error === "" && typeof error != 'undefined') {
        t.statusLine("File saved to "+fname);
        return true;
    } else {
        t.statusLine(" "+error);
        return false;
    }
}
function viEditor(initterm) {
    if (initterm) {
        // on first enty only
        initterm.clear();
        initterm.maxLines = globalterm.conf.rows-1; // for status line
        initterm.env.mode = 'ctrl';
        initterm.env.handler = initterm.handler;
        var error = "";
        if (vifile !== "") {
            error = cmdCat(initterm,true);
            if (error === "") {
                initterm.statusLine("\""+vifile+"\" [New File]");
                viSplash(initterm);
            } else if (error != "ok" && typeof error != 'undefined') {
                initterm.statusLine("Error: "+error, 1);
            } else {
                initterm.write('%n');
                if (safari) {
                    initterm.statusLine(' On Safari browsers use <TAB> instead of <ESC>');
                }
            }
        } else { // no file given
            initterm.statusLine(" [New File]");
            viSplash(initterm);
        }
        if (!visplvis) {
            for (var r=initterm.r; r<initterm.maxLines; r++) {
                initterm.printRowFromString(r, '~');
            }
        }
        return;
    }
    // called as handler -> lock first
    this.lock=true;
    this.cursorOff(); // hide cursor
    var key = this.inputChar;

    // navigate in both modes
    if (key == termKey.LEFT) {this.cursorLeft();}
    else if (key == termKey.RIGHT) {this.cursorRight();}
    else if (key == termKey.UP) {
        var c=this.c;
        var ru=this.r - 1;
        if (ru < 0) { ru = 0;}
        while (!this.isPrintable(this.charBuf[ru][c]) && c>0) {c--;}
        this.cursorSet(ru, c);
    }
    else if (key == termKey.DOWN) {
        var cd=this.c;
        var rd=this.r + 1;
        if (this.charBuf[rd][0] != 126) {
            while (!this.isPrintable(this.charBuf[rd][cd]) && cd>0) {cd--;}
            this.cursorSet(rd, cd);
        }
    }
    if (visplvis) { // splash screen is visible
        for (var ro=this.r; ro<this.maxLines; ro++) {
            this.printRowFromString(ro, '~');
        }
        visplvis = false;
    }

    if (this.env.mode == 'ctrl') {
        if (key == 104 && vicmd.charAt(0)!=':') {this.cursorLeft();}// h cursor left
        else if (key == 106 && vicmd.charAt(0)!=':') {
            var cd2=this.c;
            var rd2=this.r + 1;
            if (this.charBuf[rd2][0] != 126) {
                while (!this.isPrintable(this.charBuf[rd2][cd2]) && cd2>0) {cd2--;}
                this.cursorSet(rd2, cd2);
            }
        }// j cursor down
        else if (key == 107 && vicmd.charAt(0)!=':') {
            var c2=this.c;
            var ru2=this.r - 1;
            if (ru2 < 0) { ru2 = 0;}
            while (!this.isPrintable(this.charBuf[ru2][c2]) && c2>0) {c2--;}
            this.cursorSet(ru2, c2);
        }// k cursor up
        else if (key == 108 && vicmd.charAt(0)!=':') {this.cursorRight();}// l cursor right

        // this is the control mode
        if (key == termKey.CR) {
            if (vicmd.charAt(0)!=':') {
                viquit = viopen = visave = viforce = viedit = false;
                vicmd = "";
                this.statusLine("Error: no command given. Use <ESC>:q to quit.");
            }
            if (visave) {
                viopen = visave = viedit = false;
                var name = vicmd.split (' ');
                if (name.length > 2) {
                    this.statusLine("Error: no space in file name. Use <ESC>:w filename.");
                } else if (name.length == 2 || vifile !== "") { // ok we have a file name to use
                    if (name.length == 2) {
                        vifile = name[1];
                    }
                    if (saveFile(this,vifile)) {
                        visaved = true;

                    } else {
                        viquit = false;
                    }
                } else {
                    this.statusLine("Error: no file name. Use <ESC>:w filename to save.");
                }
            } else if (viopen) {
                viquit = viopen = visave = viedit = false;
                var fname = vicmd.split (' ');
                if (fname.length > 2) {
                    this.statusLine("Error: no space in file name. Use <ESC>:e filename.");
                } else if (fname.length == 2 || vifile !== "") { // ok we have a file name to use
                    if (fname.length == 2) {
                        vifile = fname[1];
                    }
                }
                this.clear();
                error = cmdCat(this,true,vifile);
                if (error === "") {
                    this.statusLine("\""+vifile+"\" [New File]");
                } else if (error != "ok" && typeof error != 'undefined') {
                    this.statusLine("Error: "+error, 1);
                }
            }
            if (viquit) {
                if (visaved || viforce) {
                    viquit = viopen = visave = viforce = viedit = false;
                    vicmd = "";
                    vifile = "";
                    // leave charMode and reset the handler to normal
                    this.charMode = false;
                    this.handler = this.env.handler;
                    this.maxLines = globalterm.conf.rows;
                    this.clear();
                    this.prompt();
                    return;
                } else {
                    this.statusLine("Error: file modified since last write; save or use ! to override.");
                }
            }
            vicmd = "";
            viquit = viopen = visave = viforce = viedit = false;
            // execute the commands
        } else if (key == 33 && vicmd.charAt(0)==':') { // '!'
            viforce = true;
            vicmd += '!';
            this.statusLine(vicmd);
        } else if (key == 58 && vicmd.charAt(0)!=':') { // ':'
            vicmd += ':';
            viquit = false;
            visave = false;
            viforce = false;
            this.statusLine(vicmd);
        } else if (key == 113 && vicmd.charAt(0)==':' && !viedit) { // 'q'
            viquit = true;
            vicmd += 'q';
            this.statusLine(vicmd);
        } else if (key == 119 && vicmd.charAt(0)==':' && !viedit) { // 'w'
            visave = true;
            vicmd += 'w';
            this.statusLine(vicmd);
        } else if (key == 101 && vicmd.charAt(0)==':') { // 'e'
            viopen = true;
            vicmd += 'e';
            this.statusLine(vicmd);
        } else if (key == 120 && vicmd.charAt(0)==':' && !viedit) { // 'x'
            viquit = visave = true;
            vicmd += 'x';
            this.statusLine(vicmd);
        } else if (key == 120 && !viedit) { // 'x' to delete char
            visaved = false;
            this.fwdDelete();
        } else if (key == 68 && !viedit) { // 'D'
            visaved = false;
            while (this.isPrintable(this.charBuf[this.r][this.c])) {
                this.fwdDelete();
            }
        } else if (key == 100 && !viedit) { // 'd'
            vicmd += "d";
            if (vicmd == "dd") {
                visaved = false;
                this.cursorSet(this.r, 0);
                while (this.isPrintable(this.charBuf[this.r][this.c])) {
                    this.fwdDelete();
                }
                removeLine(this,this.r);
                vicmd = "";
            }
        } else if (key == 105 && !viedit) { // 'i'
            this.statusLine("-- INSERT --", 0);
            this.env.mode = '';
        } else if (key == termKey.ESC || key == 9) {
            this.statusLine("", 0);
            viquit = false;
            visave = false;
            viforce = false;
            vicmd = "";
        } else if (visave || viopen) {
            if (key == 32) {viedit = true;}
            var ch = String.fromCharCode(key);
            vicmd += ch;
            this.statusLine(vicmd);
        }
    }
    else {
        // this is the edit mode
        if (key == termKey.ESC || key == 9) {
            // enter control mode
            // clear status line
            vicmd = "";
            this.statusLine("", 1);
            this.env.mode = 'ctrl';
        }
        else if (key == termKey.CR) {
            visaved = false;
            if (!this.isPrintable(this.charBuf[this.r][0]) ||
                this.charBuf[this.r][0] == 126) {
                this.write(' ');
            }
            if (this.r < this.maxLines-1) {
                this.newLine();
            } else {
                this.statusLine("Error: paging not possible. Sorry.");
            }
        }
        else if (key == termKey.BS) {
            visaved = false;
            this.backspace();
        }
        else if (key == termKey.DEL) {
            visaved = false;

            if (this.c === 0 && !this.isPrintable(this.charBuf[this.r][0])) {
                removeLine(this,this.r);
            } else {
                this.fwdDelete();
            }
        }
        else if (this.isPrintable(key)) {
            // printable char - just type it
            var cha = String.fromCharCode(key);
            this.type(cha);
            visaved = false;
        }
    }
    // add fancy cursor position on the status line
    var sline = readOneLine(this,this.maxLines);
    sline = sline.slice(0,45);
    var sp = ' ';
    if (sline.charAt(0) != 'E') { // Only when no error displayed
        for (var j=sline.length; j<this.maxCols-18; j++) {sp += ' ';}
        this.statusLine(sline+sp+"row:"+this.r+"  col:"+this.c);
    }
    this.lock = false;
    this.cursorOn();
}

function cmdEdit(t) {
    if (t.argv.length == 2) {
        vifile = t.argv[1];
    }
    // init the editor
    viEditor(t);
    t.handler = viEditor;
    t.charMode = true;
    t.cursorOn();
    t.lock = false;
    return;
}
var snakedir = 1;  // 0 up 1 right 2 down 3 left
var snsplvis = false;
var snalive = true;
var snakespeed = 30;
var snakefood = 3;
var snakerocks = 700;
var snakespeedid = 1;
var snakefoodid = 1;
var snakerocksid = 1;
var snauto = false;
var snrestart = false;
var snautostr = "";
var snrestartstr = "";
var sn;
function snakeSplash(t) {
    var splash = [
        '              ~~~ S N A K E ~~~',
        '',
        '             first version alpha...',
        '',
        '<ESC> or q   quit at any time',
        '<space>      pause/play',
        's            change speed (slow medium fast)',
        'f            change amount of food (numbers)',
        'o            change amount of obstacles (rocks)',
        'a            toggle drunk autopilot on or off',
        'r            toggle auto restart on or off',
        '',
        'Press <Enter> to start the game'
                  ];
    var dummy = [];
    var emptystr = "";
    for (var j=0;j<51;j++){
        emptystr += " ";
    }
    for (var i=0;i<splash.length+3;i++) {
        dummy.push(emptystr);
    }
    snsplvis = true;
    t.write(randomScreen());
    centerSplash(t,dummy);
    centerSplash(t,splash);
}
function distToCenter(t,row,col) {
    var c = t.maxCols/2;
    var r = t.maxLines/2;
    var d = Math.sqrt(Math.pow(row-r,2)+Math.pow(col-c,2));
    return d;
}
function delta(row,col,row1,col1) {
    var d = Math.sqrt(Math.pow(row-row1,2)+Math.pow(col-col1,2));
    return d;
}

function Snake(initterm) {
    this.t = initterm;
    this.col = 10;
    this.row = 10;
    this.autoaction = 50;
    this.body = [];
    this.body.unshift([this.col,this.row]);
    this.energy = 3;
    this.speedid = snakespeedid;
    this.foodid = snakefoodid;
    this.rocksid = snakerocksid;
    this.speed = [170,100,50];
    this.food = [1,5,15];
    this.rocks = [1500,700,300];
    this.nleft = -2; // variable parameters for random decision -4 - -1
    this.nright = 2; // 1 - 4
    this.speedstr = ['slow','medium','fast'];
    this.foodstr = ['little','medium','max'];
    this.rocksstr = ['little','medium','max'];
    snalive = true;
    snakedir = 1;
    mm = 0;
    snakespeed = this.speed[this.speedid];
    snakefood = this.food[this.foodid];
    snakerocks = this.rocks[this.rocksid];
}
Snake.prototype.toggleSpeed = function()  {
    this.speedid++;
    this.speedid = this.speedid%3;
    snakespeedid = this.speedid;
    snakespeed = this.speed[sn.speedid];
};
Snake.prototype.toggleFood = function()  {
    this.foodid++;
    this.foodid = this.foodid%3;
    snakefoodid = this.foodid;
    snakefood = this.food[this.foodid];
};
Snake.prototype.toggleRocks = function()  {
    this.rocksid++;
    this.rocksid = this.rocksid%3;
    snakerocksid = this.rocksid;
    snakerocks = this.rocks[this.rocksid];
};
Snake.prototype.eat = function(row,col)  {
    if (this.checkFood(row,col)) {
        var e = String.fromCharCode(this.t.charBuf[row][col]);
        e++; // convert to int
        this.energy = this.energy+e-1;
    }
};
Snake.prototype.newCoord = function(dir,row,col) {
    switch (dir) {
        case 0: row--; break;
        case 1: col++; break;
        case 2: row++; break;
        case 3: col--; break;
        default: break;
    }
    return [row,col];
};
Snake.prototype.turnedLeft = function(left) {
    // the nleft and nright parameters are used to generate a random
    // turn. We influence the odds by "moving" those parametrs in
    // the negative or positive direction. - is left turn, + is right turn
    if (left) { // turned left -> shift to the right
        if (this.nleft !== 0) {this.nleft++;}
        if (this.nright != 3) {this.nright++;}
    } else { // turned right
        if (this.nleft != -3) {this.nleft--;}
        if (this.nright !== 0) {this.nright--;}
    }
};
var lastlooptmp = 0;
Snake.prototype.snakeAutopilot = function() {
    // This function decides if a turn is needed
    // Is an action required? Say to avoid crash
    // or after random steps
    var nc = this.body[0][0]; // where we are NOW
    var nr = this.body[0][1];
    var nccand = nc; // candidates
    var nrcand = nr;
    var dir = snakedir;
    var rand = 0;
    var leftt = false;
    var res = [];
    var m = 6; // border repulsive magnet
    var mcorr = 0;

    // Decisions algorithm

    // Turn is taken if: food direct on the path, wall will kill us, random

    // When close to the border (< m) look if a left or right turn will bring us
    // toward the center. When the direction is found, the factor mcorr will be used
    // to biais the odds for the left or right turn
    //
    // The random left or right decision is biaised by shifting the range -3 3 toward
    // the negative (left) or positive (right) side.

    // correct the odds to do a turn towards the center if we are close
    // to the border ( < 5 )
    if (nc < m || this.t.maxCols-nc < m || nr < m || this.t.maxLines-nr < m) {
        dir = dir + 3; // left try
        dir = dir%4;
        res = this.newCoord(dir,nr,nc);
        var nrl = res[0];
        var ncl = res[1];
        dir = dir + 2; // right try (180 from here)
        dir = dir%4;
        res = this.newCoord(dir,nr,nc);
        var nrr = res[0];
        var ncr = res[1];
        // left                             // right
        if (distToCenter(this.t,nrl,ncl) < distToCenter(this.t,nrr,ncr)) {
            // left turn brings us towards the center => use this
            this.mm = mcorr = -1;
        } else {
            this.mm =mcorr = 1;
        }
    } else {
        this.mm =mcorr = 0;
    }

    // necessary turn. This is a forced turn
    dir = snakedir;
    res = this.newCoord(dir,nr,nc);
    nrcand = res[0];
    nccand = res[1];
    if (!this.check(nrcand,nccand)) { // no good we need to turn

        // Loop detection
        // look back and see if we reach the head (own loop) or reach a wall (wall loop)
        var rnow = nr;
        var cnow = nc;
        var rcrash = nrcand;
        var ccrash = nccand;
        var loopsteps = 0;
        var stepsright = 0;
        var originaldir = dir;
        var dirtotake = dir;
        var deltatocrash = 750;
        var thisdelta = 0;
        var washere = false;
        var chashchar = this.t.charBuf[rcrash][ccrash];
        var lastpath = [];
        dir = dir + 2;
        dir = dir%4;
        res = this.newCoord(dir,rnow,cnow); // one step back
        nrcand = res[0];
        nccand = res[1];
        //this.t.typeAt(rcrash,ccrash,'*',5*256);
        // only check for loop if we have a choice
        //if (this.nleft !==0 && this.nright !== 0) {
        if (this.t.charBuf[rcrash][ccrash] == 79 || this.t.charBuf[rcrash][ccrash] == 42) {

            while (nrcand!=rcrash || nccand!=ccrash) {
                // try all 3 directions and take the smallest dist to crash site
                // if more that one possibility
                loopsteps++;
                // left try
                dir = dir + 3;
                dir = dir%4;
                res = this.newCoord(dir,rnow,cnow);
                nrcand = res[0];
                nccand = res[1];
                // candidate has to stay inside the frame
                if (nrcand >= 0 && nrcand <= this.t.conf.rows-2 &&
                    nccand >= 0 && nccand <= this.t.conf.cols-1){
                    if (this.t.charBuf[nrcand][nccand] == 79 ||
                        this.t.charBuf[nrcand][nccand] == 42) {
                        washere = false;
                        for (var il=0;il<lastpath.length;il++) {
                            if (nrcand==lastpath[il][0] && nccand==lastpath[il][1]) {
                                washere = true; // this direction is no good, was here before
                                break;
                            }
                        }
                        if (!washere) {
                            deltatocrash = delta(nrcand,nccand,rcrash,ccrash);
                            dirtotake = dir;
                        }
                    }
                }
                // straight
                dir++; // right turn from the left before
                dir = dir%4;
                res = this.newCoord(dir,rnow,cnow);
                nrcand = res[0];
                nccand = res[1];
                if (nrcand >= 0 && nrcand <= this.t.conf.rows-2 &&
                    nccand >= 0 && nccand <= this.t.conf.cols-1){
                    if (this.t.charBuf[nrcand][nccand] == 79 ||
                        this.t.charBuf[nrcand][nccand] == 42) {
                        washere = false;
                        for (var is=0;is<lastpath.length;is++) {
                            if (nrcand==lastpath[is][0] && nccand==lastpath[is][1]) {
                                washere = true;
                                break;
                            }
                        }
                        if (!washere) {
                            thisdelta = delta(nrcand,nccand,rcrash,ccrash);
                            if (thisdelta < deltatocrash) {
                                dirtotake = dir;
                                deltatocrash = thisdelta;
                            }
                        }
                    }
                }
                // try right
                dir++;
                dir = dir%4;
                res = this.newCoord(dir,rnow,cnow);
                nrcand = res[0];
                nccand = res[1];
                if (nrcand >= 0 && nrcand <= this.t.conf.rows-2 &&
                    nccand >= 0 && nccand <= this.t.conf.cols-1){
                    if (this.t.charBuf[nrcand][nccand] == 79 ||
                        this.t.charBuf[nrcand][nccand] == 42) {
                        washere = false;
                        for (var ir=0;ir<lastpath.length;ir++) {
                            if (nrcand==lastpath[ir][0] && nccand==lastpath[ir][1]) {
                                washere = true;
                                break;
                            }
                        }
                        if (!washere) {
                            thisdelta = delta(nrcand,nccand,rcrash,ccrash);
                            if (thisdelta < deltatocrash) {
                                dirtotake = dir;
                                deltatocrash = thisdelta;
                            }
                        }
                    }
                }

                if (deltatocrash < 750) { // ok found next step
                    dir = dirtotake;
//                      if (rnow != this.t.conf.rows-2 || cnow != this.t.conf.cols-1){
//                      this.t.typeAt(rnow,cnow,'*',2*256);
//                      }
                    res = this.newCoord(dir,rnow,cnow);
                    nrcand = res[0];
                    nccand = res[1];
                    rnow = res[0];
                    cnow = res[1];

                    lastpath.unshift(res);
                    deltatocrash = 750;

                } else {
                    loopsteps = 0;
                    deltatocrash = 750;
                    break;
                }

            }
        }
//         if (lastpath.length > 0){
//         var r = lastpath[1];
//         this.t.typeAt(r[0],r[1],'*',6*256);
//         }
        //}
        lastlooptmp = loopsteps;

        // dir came right back at us in a 180 => avoid
        if (loopsteps > 0 && Math.abs(originaldir-dir) == 2){loopsteps = 0;}
        // which turn is this? left or right?
        if(loopsteps > 0) {
            res = this.newCoord(dir,nr,nc);
            nrcand = res[0];
            nccand = res[1];
            if (!this.check(nrcand,nccand)) { // ouch no good to avoid loop
                dir = dir + 2;
                dir = dir%4;
            }
            originaldir--;
            originaldir = originaldir%4;
            if (originaldir == dir) { // this is a left turn
                leftt = true;
            } else {
                leftt = false;
            }
            this.turnedLeft(leftt);
            snakedir = dir;


        } else { // no loop detected, let the dices play
            dir = snakedir;
            // take left or right turn
            rand = randomRange(this.nleft+mcorr,this.nright+mcorr);
            if (rand < 0 || this.nright === 0) { // left turn
                dir = dir + 3;
                leftt = true;
            } else {
                dir++;  // leftt = false per default
            }
            dir = dir%4;
            res = this.newCoord(dir,nr,nc);
            nrcand = res[0];
            nccand = res[1];
            // now check again
            if (!this.check(nrcand,nccand)) { // still no good do a 180
                dir = dir + 2;
                dir = dir%4;
                leftt = (leftt) ? false : true; // inverse the turn
            }
            snakedir = dir;
            this.turnedLeft(leftt);
            this.autoaction++;
        }
    }


    // 2 random turn
    dir = snakedir;
    if (this.autoaction <= 0) { // do a random turn after a while
        rand = randomRange(this.nleft+mcorr,this.nright+mcorr); // take left or right turn
        if (rand < 0  || this.nright === 0) {
            dir = dir + 3; // left turn
            leftt = true;
        } else {
            dir++;         // right turn
        }
        dir = dir%4;
        res = this.newCoord(dir,nr,nc);
        nrcand = res[0];
        nccand = res[1];
        // now check if first turn is possible
        if (!this.check(nrcand,nccand)) { // still no good do a 180
            dir = dir + 2;
            dir = dir%4;
            leftt = (leftt) ? false : true;
            // now check again. It could be that left AND right are bad
            // in which case do not turn
            res = this.newCoord(dir,nr,nc);
            nrcand = res[0];
            nccand = res[1];
            if (this.check(nrcand,nccand)) { // second turn is ok, take it
                snakedir = dir;
                this.turnedLeft(leftt);
            } // otherwise do nothing, keep same direction
        } else { // first turn is ok
            snakedir = dir;
            this.turnedLeft(leftt);
        }
        this.autoaction = randomRange(10,this.t.conf.cols);
    }

    // turn for food (in vicinity)
    // check 3 directions: straight, left, right
    dir = snakedir;
    res = this.newCoord(dir,nr,nc); // where we are going now
    nrcand = res[0];
    nccand = res[1];
    if (!this.checkFood(nrcand,nccand)) { // no food straight
        dir = dir + 3; // left try
        dir = dir%4;
        res = this.newCoord(dir,nr,nc);
        nrcand = res[0];
        nccand = res[1];
        if(!this.checkFood(nrcand,nccand)) { // no food left
            dir = dir + 2; // right try (180 from here)
            dir = dir%4;
            res = this.newCoord(dir,nr,nc);
            nrcand = res[0];
            nccand = res[1];
            if(this.checkFood(nrcand,nccand) && this.nright > 0) { // food right
                snakedir = dir;
                this.turnedLeft(false);
                this.autoaction++;
            }

        } else { // food left
            if (this.nleft < 0) { // turn if odds allow
                snakedir = dir;
                this.turnedLeft(true);
                this.autoaction++;
            }
        }
    } // food straight -> no turn
    // in any case decrement toward the next turn
    this.autoaction--;
};
Snake.prototype.check = function(row,col)  {
    var ch = String.fromCharCode(this.t.charBuf[row][col]);
    if (ch != '*' && ch != 'O' && ch != '#' && ch != ',' && ch != '\'') {
        return true;
    } else {
        return false;
    }
};
Snake.prototype.checkFood = function(row,col)  {
    var ch = String.fromCharCode(this.t.charBuf[row][col]);
    if (isnumeric(ch)) {
        return true;
    } else {
        return false;
    }
};
Snake.prototype.step = function(dir)  {
    var nc = this.body[0][0];
    var nr = this.body[0][1];
    var res = this.newCoord(dir,nr,nc); // next point based on direction
    nr = res[0];
    nc = res[1];
    this.col = nc;
    this.row = nr;
    this.body.unshift([nc,nr]);
    if (this.check(nr,nc)) {
        if (this.checkFood(nr,nc)) {
            this.eat(nr,nc);
            // replace food with new integer
            var newf = '';
            newf += randomRange(1,9);
            var randr = randomRange(2,this.t.conf.rows-3);
            var randc = randomRange(2,this.t.conf.cols-2);
            if (this.t.charBuf[randr][randc] != 35 ) { // 35 = # no food on rock
                this.t.typeAt(randr,randc,newf);
            }
        }
        this.t.typeAt(nr,nc,'O',3*256);
    } else { //dead
        clearInterval(interval);
        interval = 0;
        snalive = false;
        this.t.typeAt(nr,nc,'@',2*256);
        snakespeedid = this.speedid;
        snakefoodid = this.foodid;
    }
    if (this.energy === 0) {
        var last = this.body.pop();
        this.t.typeAt(last[1],last[0],' ');
    } else {
        this.energy--;
    }
    return snalive;
};
function snakeGame(initterm) {
    if (initterm) {// on first enty only
        initterm.clear();
        initterm.maxLines = globalterm.conf.rows-1; // for status line
        initterm.env.handler = initterm.handler;
        initterm.cursorOff();
        sn = new Snake(initterm);
        snakeSplash(initterm);
        if (!snauto) {snautostr = "";}
        else {
            snautostr = "# Autopilot! # ";
            setTimeout('carriageReturn()',2000);
        }
        if (!snrestart) {snrestartstr = "";}
        else {snrestartstr = "# Auto restart ";}

        return;
    }
    // called as handler -> lock first
    this.lock=true;
    var key = this.inputChar;
    if (snsplvis) {
        // this starts the game
        if (key == termKey.CR || key == 110) {
            if (key == 110 && !snalive) { // new snake
                sn = new Snake(this);
            }
            if (snalive) {
                this.write(randomScreen(true));
                snsplvis = false;
                key = 32;
            }
        } else if (key != 115 && key != 102 && key != termKey.ESC &&
                   key != 113 && key != 111){
            key = 0;
        }
    }

    if (key == termKey.LEFT) {snakedir = 3;}
    else if (key == termKey.RIGHT) {snakedir = 1;}
    else if (key == termKey.UP) {snakedir = 0;}
    else if (key == termKey.DOWN) {snakedir = 2;}
    else if (key >= 48 && key <= 57) { // numeric only
        sn.eat(String.fromCharCode(key));
    } else if (key == termKey.CR) {
        if (snauto) {sn.snakeAutopilot();}
        // move one step
        if (snalive && !sn.step(snakedir)) { // game over
            var splash = [
                '                 You crashed!',
                '',
                '               G A M E  O V E R',
                '',
                '<ESC> or q   to quit',
                'n            new game',
                's            change speed (slow medium fast)',
                'f            change amount of food (numbers)',
                'o            change amount of obstacles (rocks)',
                '',
                'Press n to start a new game'
                          ];
            splash.push('');
            splash.push('Score: '+sn.body.length);
            snsplvis = true;
            var dummy = [];
            var emptystr = "";
            for (var j=0;j<50;j++){
                emptystr += " ";
            }
            for (var i=0;i<splash.length+3;i++) {
                dummy.push(emptystr);
            }
            snsplvis = true;
            centerSplash(this,dummy);
            centerSplash(this,splash);
            if (snrestart) {setTimeout('pressKey(110)',2000);}
        }

    } if (key == 32 && snalive) { // space = pause
        if (interval === 0) {
            interval = setInterval ('carriageReturn()', snakespeed );
        } else {
            clearInterval(interval);
            interval = 0;
            this.statusLine("Game paused. Use space key to continue",3);
        }
    } else if (key == 97) { // 97 = 'a'
        snauto = (snauto) ? false : true;
        if (!snauto) {snautostr = "";}
        else {snautostr = "# Autopilot # ";}
    } else if (key == 114) { // 114 = 'r'
        snrestart = (snrestart) ? false : true;
        if (!snrestart) {snrestartstr = "";}
        else {snrestartstr = "# Auto restart ";}
    } else if (key == 115) { // 115 = 's'
        sn.toggleSpeed();
    } else if (key == 102) { // 102 = 'f'
        sn.toggleFood();
    } else if (key == 111) { // 111 = 'o'
        sn.toggleRocks();
    } else if (key == termKey.ESC || key == 113) { // 113 = 'q'
        // leave charMode and reset the handler to normal
        if (interval !== 0) {
            clearInterval(interval);
            interval = 0;
        }

        snauto = false;
        snrestart = false;
        this.charMode = false;
        this.handler = this.env.handler;
        this.maxLines = globalterm.conf.rows;
        this.clear();
        this.prompt();
        return;
    }
    if (interval !== 0 || snsplvis) { // game is running
        this.statusLine(snrestartstr+snautostr+
                        " Speed: "+sn.speedstr[sn.speedid]+
                        " Food: "+sn.foodstr[sn.foodid]+
                        " Rocks: "+sn.rocksstr[sn.rocksid]+"     Score:"+
                        sn.body.length+" To digest : "+sn.energy);
    }
    this.lock = false;
}

function cmdSnake(t) {
    if (t.argv.length >= 2) {
        if (t.argv[1] == '-h' || t.argv[1] == '--help') {
            t.write('%c(@lightgrey)usage: snake [options]%n');
            t.write('%c(@lightgrey)  -a for automatic start with autopilot engaged%n');
            t.write('%c(@lightgrey)  -r for auto restart after a crash (makes a screensaver with -a)%n');
            t.write('%c(@lightgrey)  -s1 for speed: -s1 = slow; -s3 = fast%n');
            t.write('%c(@lightgrey)  -f1 for food: -f1 = less; -f3 = more%n%n');
            t.write('%c(@lightgrey)  -o1 for obstacles: -o1 = less; -o3 = more rocks%n%n');
            t.write('%c(@lightgrey)  for example: snake -a -s2 -f3%n');
            t.write('%c(@lightgrey)see splash screen or man page for game options%n');
            return;
        }
        if(t.argv.indexOf('-a') != -1) {snauto = true;}
        if(t.argv.indexOf('-r') != -1) {snrestart = true;}
        if(t.argv.indexOf('-s1') != -1) {snakespeedid = 0;}
        if(t.argv.indexOf('-s2') != -1) {snakespeedid = 1;}
        if(t.argv.indexOf('-s3') != -1) {snakespeedid = 2;}
        if(t.argv.indexOf('-f1') != -1) {snakefoodid = 0;}
        if(t.argv.indexOf('-f2') != -1) {snakefoodid = 1;}
        if(t.argv.indexOf('-f3') != -1) {snakefoodid = 2;}
        if(t.argv.indexOf('-o1') != -1) {snakerocksid = 0;}
        if(t.argv.indexOf('-o2') != -1) {snakerocksid = 1;}
        if(t.argv.indexOf('-o3') != -1) {snakerocksid = 2;}
    }
    snakeGame(t);
    t.handler = snakeGame;
    t.charMode = true;
    t.lock = false;
    return;
}
function cmdInvaders(t) {
    var started = false;
    if (t.argv.length >= 2) {
        if (t.argv[1] == '-h' || t.argv[1] == '--help') {
            t.write('%c(@lightgrey)usage: invaders [-f]%n');
            //t.write('%c(@lightgrey)  the -s option reduces the game field to 80 cols x 25 rows (default)%n');
            t.write('%c(@lightgrey)  the -f option uses full screen%n');
            t.write('%c(@lightgrey)This game is courtesy of Norbert Landsteiner <http://www.masswerk.at>%n');
            started = true; // just to avoid the error message
//         } else if (t.argv[1] == '-s') {
//             started = TermlibInvaders.start(t, 80, 25);
        } else if (t.argv[1] == '-f') {
            started = TermlibInvaders.start(t);
        }
    } else {
        started = TermlibInvaders.start(t, 80, 25);
    }
    if ( started ) {return;}
    else {
        t.write('Sorry, invaders failed. Your browser window might be too small or wrong option');
    }
    t.wrapping = true;
}
var vartoptmp;
function topHandler(initterm) {
    if (initterm) {// on first enty only
        initterm.clear();
        initterm.env.handler = initterm.handler;
        initterm.cursorOff();
        vartoptmp = vartop;
        if (vartoptmp.length > initterm.conf.rows) {
            vartoptmp = vartoptmp.slice(0,initterm.conf.rows);
        }
        initterm.write(vartoptmp);
        interval = setInterval ('carriageReturn()', 2000 );
        return;
    }
    // called as handler -> lock first
    this.lock=true;
    var now = new Date();
    var h = now.getHours();
    var hup = (h+8)%24;
    var m = now.getMinutes();
    var mup = (m+13)%60;
    var s = now.getSeconds();
    var sup = (s+45)%60;
    if (h < 10) {h = '0'+h;}
    if (m < 10) {m = '0'+m;}
    if (s < 10) {s = '0'+s;}
    if (hup < 10) {hup = '0'+hup;}
    if (mup < 10) {mup = '0'+mup;}
    if (sup < 10) {sup = '0'+sup;}
    var timestr = '%c(@lightgrey)'+uptimed+'+'+hup+':'+mup+':'+sup+'    '+h+':'+m+':'+s;
    var key = this.inputChar;
    if (key == termKey.CR) {
        var procarray = vartoptmp.slice(8,vartop.length-1);
        procarray.shuffle();
        this.cursorSet(0, 57);
        this.write(timestr);
        this.cursorSet(8, 0);
        this.write(procarray);
    } else {
        clearInterval(interval);
        interval = 0;
        this.charMode = false;
        this.handler = this.env.handler;
        this.clear();
        this.prompt();
        this.wrapping = true;
        return;
    }
    this.lock = false;
}
function cmdTop(t) {

    t.wrapping = false;
    topHandler(t);
    t.handler = topHandler;
    t.charMode = true;
    t.lock = false;
    return;

}
function cmdSsh(t) {
    t.clear();
    t.charMode = true;
    t.cursorOff();
    t.write("Loading SSH java applet...%n");
    t.write('Close with the "X" on the top right corner.%n');
    t.write('See also the man ssh for options.%n');
    var server = '';
    var username = '';
    var sshport = 0;
    var tunnel = '';

    if (t.argv.length > 1) {
        for (var i=1;i<t.argv.length;i++) {
            if(t.argv[i].indexOf('-p') != -1) {
                sshport = t.argv[i+1];
            }
            if(t.argv[i].indexOf('-L') != -1) {
                tunnel = t.argv[i+1];
            }
        }
        // Server or login@server must be the last argument
        if(t.argv[t.argv.length-1].indexOf('@') != -1) {
            // Username and server info
            var args = t.argv[t.argv.length-1].split('@');
            server = args[1];
            username = args[0];
        } else {
            server = t.argv[t.argv.length-1];
        }
    }

    var dim = t.getDimensions();
    var sshcol = t.conf.cols;
    var sshrow = Math.round(t.conf.rows*0.8);
    var geom = sshcol+'x'+sshrow+'+0-0';
    var bold = document.createElement('b');
    var link = document.createElement('a');
    link.setAttribute("href", "javascript:closeSsh()");
    link.setAttribute("id", "link");

    var text = document.createTextNode("X");
    bold.appendChild(text);
    link.appendChild(bold);

    var applet = document.createElement('applet');
    applet.setAttribute("id", "applet");
    applet.setAttribute("width", dim.width-10);
    if (safari) {
        applet.setAttribute("height", dim.height);
    } else {
        applet.setAttribute("height", dim.height-9);
    }
    //applet.setAttribute("style","position: absolute; z-index: 2; left: 4px; top: 0;");
    applet.setAttribute("archive", "http://cb.vu/mindterm.jar");
    //applet.setAttribute("archive", "mindterm.jar");
    applet.setAttribute("code", "com.mindbright.application.MindTerm.class");
    var p1 = document.createElement("param");
    p1.setAttribute("name", "autoprops");
    p1.setAttribute("value", "both");
    applet.appendChild(p1);
    var p2 = document.createElement("param");
    p2.setAttribute("name", "term-type");
    p2.setAttribute("value", "xterm-color");
    applet.appendChild(p2);
    var p3 = document.createElement("param");
    p3.setAttribute("name", "sepframe");
    p3.setAttribute("value", "false");
    applet.appendChild(p3);
    var p4 = document.createElement("param");
    p4.setAttribute("name", "geometry");
    p4.setAttribute("value", geom);
    applet.appendChild(p4);
    var p5 = document.createElement("param");
    p5.setAttribute("name", "scrollbar");
    p5.setAttribute("value", "none");
    applet.appendChild(p5);
    var p6 = document.createElement("param");
    p6.setAttribute("name", "menus");
    p6.setAttribute("value", "popN");
    applet.appendChild(p6);
    var p8 = document.createElement("param");
    p8.setAttribute("name", "fg-color");
    p8.setAttribute("value", "94,131,224");
    applet.appendChild(p8);
    var p9 = document.createElement("param");
    p9.setAttribute("name", "bg-color");
    p9.setAttribute("value", "24,24,24");
    applet.appendChild(p9);
    var p13 = document.createElement("param");
    p13.setAttribute("name", "font-size");
    p13.setAttribute("value", "13");
    applet.appendChild(p13);
    var p14 = document.createElement("param");
    p14.setAttribute("name", "local0");
    p14.setAttribute("value", "/general/8080:localhost:80");
    applet.appendChild(p14);
    if (username != '') {
        var p10 = document.createElement("param");
        p10.setAttribute("name", "server");
        p10.setAttribute("value", server);
        applet.appendChild(p10);
        var p11 = document.createElement("param");
        p11.setAttribute("name", "username");
        p11.setAttribute("value", username);
        applet.appendChild(p11);
        var p12 = document.createElement("param");
        p12.setAttribute("name", "quiet");
        p12.setAttribute("value", "true");
        applet.appendChild(p12);
    }
    if (sshport !== 0) {
        var p20 = document.createElement("param");
        p20.setAttribute("name", "port");
        p20.setAttribute("value", sshport);
        applet.appendChild(p20);
    }
    if (tunnel !== '') {
        var tunnelstr = "/general/"+tunnel;
        var p21 = document.createElement("param");
        p21.setAttribute("name", "local1");
        p21.setAttribute("value", tunnelstr);
        applet.appendChild(p21);
    }
    document.body.appendChild(link);
    document.body.appendChild(applet);
    return;
}
function closeSsh() {
    var applet = document.getElementsByTagName("applet")[0];
    applet.parentNode.removeChild(applet);
    var link = document.getElementsByTagName("a")[1];
    link.parentNode.removeChild(link);
    globalterm.clear();
    globalterm.charMode = false;
    globalterm.lock = false;
    globalterm.cursorOn();
    globalterm.prompt();

    return;
}

function bsHandler(initterm) {
    if (initterm) {// on first enty only
        initterm.clear();
        initterm.env.handler = initterm.handler;
        initterm.cursorOff();
        setColor('blue');
        initterm.write(bs);
        return;
    }
    // called as handler -> lock first
    this.lock=true;
    this.charMode = false;
    this.handler = this.env.handler;
    this.clear();
    this.prompt();
    setNormal();
    return;
}
function cmdBlueScreen(t) {
    t.wrapping = false;
    bsHandler(t);
    t.handler = bsHandler;
    t.charMode = true;
    t.lock = false;
    return;

}
var userchat = "";
function chatHandler(initterm) {
    if (initterm) {// on first enty only
        initterm.clear();
        initterm.env.handler = initterm.handler;
        initterm.write('%c(@lightgrey)> Hello. How are you today?%n');
        return;
    }

    this.lock=true;
    var key = this.inputChar;
    if (key == 35) {
        this.charMode = false;
        this.handler = this.env.handler;
        this.clear();
        this.prompt();
        fetcherror = "";
        return;
    }
    if (this.isPrintable(key)) {
        var ch = String.fromCharCode(key);
        this.type(ch);
        userchat += ch;
    }
    if (key == termKey.BS) {this.backspace();}
    else if (key == termKey.CR) {
        if (!botloaded) {
            if (fetcherror.length > 0) {
                this.write('%c(@lightgrey)> Sorry no network, could not load my notes. Bye.%n');
            } else {
                this.write('%c(@lightgrey)> Wait a few more seconds while I load my notes.%n');
            }
        }
        this.cursorOff();
        this.newLine();
        if (botloaded) {doAI(userchat);}

        var upstr = "";
        for (var i=0;i<userchat.length;i++) {
            upstr += userchat.charAt(i).toUpperCase();
        }

        if (upstr == 'BYE' ||upstr == 'GOODBYE'||upstr == 'QUIT'||
            upstr == 'EXIT'||upstr == 'BYE') {
            setTimeout('pressKey(35)',2000);
        }
        userchat = "";
    }

    this.lock=false;
    this.cursorOn();
}
var botloaded = false;

function cmdChat(t) {
    if (!botloaded) { // get the bot
        fetchHttp("http://cb.vu/bot.js",evaljs);
    }
    chatHandler(t);
    t.handler = chatHandler;
    t.charMode = true;
    t.cursorOn();
    t.lock = false;
    return;
}

/////////////////////////////////////////////////////////////////////////////
// Terminal and handlers
//////////////////////////

var term = null;
function termInitHandler() {
    this.user = 'www';
    globalterm = this;
    cmdRedim(this);
    var cookiebroken = readCookie("broken");
    if (cookiebroken.length > 0) {
        this.write('You broke it!');
        this.charMode = true;
        this.lock=true;
        this.cursorOff();
        return;
    }

    // output a start up screen, try to read the last log value from cookie
    var thislog = '%c(@lightgrey)Last login: '+Date()+' from '+clientip;
    var cookielastlog = readCookie("clilastlog");
    var oldlog = cookielastlog ? cookielastlog : thislog;
    createCookie("clilastlog", thislog, 365);

    this.write(
        [
            oldlog,
            'FreeBSD 7.1-STABLE (CB.VU) #3: '+Date(),
            '%n%n      ----   Welcome to cb.vu   ----  (start with "%c(@chartreuse)help%c(@lightgrey)" if you are lost)',
            '%c()'
         ]);
    this.newLine();
    this.write(varfortune[0]);
    this.newLine();
    this.prompt();


    // Create user files
    var allcookies = readAllCookies();
    for(var i=0;i < allcookies.length;i++) {
        if (allcookies[i] != 'clilastlog' && allcookies[i] != 'style') {
            addAFile(allcookies[i]);
        }
    }

    init(this); // init ps array

    // Check for command on url
    var ucmd = location.hash;
    if (ucmd.charAt(0) == '#') {
        TermGlobals.insertText(ucmd.slice(1));
        Terminal.prototype.globals.keyHandler({which: this.termKey.CR, _remapped:true});
    }
}

function tabCompletion(t) {

    var tosort = [];
    var tolist = [];
    var arg = '';
    var cmd = '';
    var lpath = '';
    var typed = t._getLine();

    if (typed.indexOf(' ') != -1) { // use argument => search file, not command
        args = typed.split(' ');
        cmd = args[0] + ' ';
        if (args.length == 1) { arg = ''; }
        else { arg = args[1]; }
        var fpath = getPath(arg);
        arg = fpath[1];
        lpath = fpath[0];
        var fullname = fpath[2];

        var tindex = tree.indexOf(fullname);
        if (tindex == -1) {
            tindex = tree.indexOf(lpath);
            if (tindex == -1) { tosort.push('');} // wrong path
            else { tosort = tree_files[tindex][0];}
        } else {
            tosort = tree_files[tindex][0];
            if (t._getLine().charAt(t._getLine().length-1) != '/') {
            t.type('/');
            }
            arg = '';
        }
    } else { // use command => search /sbin and /bin
        arg = typed;
        tosort = files_sbin_n.concat(files_bin_n);
    }

    var tabresult = '';

    for (var i=0; i<tosort.length; i++) {
        if (tosort[i].indexOf(arg) === 0) {
            tolist.push(tosort[i]);
        }
    }

    if (tolist.length === 0) {
        tabresult = '';
    }
    else if (tolist.length == 1) {
        tabresult = tolist[0].slice(arg.length);
        t.type(tolist[0].slice(arg.length));
    }
    else if (tolist.length > 1) {
        tabresult = tolist[0].slice(arg.length);
        var j=0;
        var nextchar = ' ';
        if (tolist[0].length < arg.length) {
            tabresult = arg;
        } else {
            tabresult = arg;

            while (tolist[0].length > (arg.length+j) && nextchar.length > 0) {
                nextchar = tolist[0].charAt(arg.length+j);
                for (var k=1; k<tolist.length; k++) {
                    if ((arg.length + j) > tolist[k].length ||
                        tolist[k].charAt(arg.length+j) != nextchar) {
                        nextchar = '';
                        break;
                    }
                }
                // ok found valid next common char, add it
                tabresult += nextchar;
                t.type(nextchar);
                j++;

            }
        }
    }

    if (tolist.length > 1) { // only display a listing if there is a real choice
        t.charMode = true;
        typed = t._getLine();
        t.lock=true;
        t.cursorOff();
        t.newLine();
        listing(t,tolist);
        t.cursorOn();
        t.lock = false;
        t.charMode = false;
        t.prompt();
        t.type(typed);
    }
}
function commandHandler() {
    this.newLine();
//    if (this.charMode) {
    //  }
    // check for raw mode first (should not be parsed)
    if (this.rawMode) {
        if (this.env.getPassword) {
            // sample password handler (lineBuffer == stored username ?)
            if (this.lineBuffer == this.env.username) {
                this.user = this.env.username;
                this.ps = '['+this.user+'@cb.vu]~>';
            } else { this.write('%c(@lightgrey)Sorry.');}
            this.env.username = '';
            this.env.getPassword = false;
        }
        this.rawMode = false;
        this.prompt();
        // leave in normal mode
        return;
    }
    // normal command parsing
    parseLine(this);
    if (this.argv.length === 0) {
        /*jsl:pass*/ // no commmand line input
    } else if (this.argQL[0]) {
        // first argument quoted -> error
        this.write("%c(@lightgrey)Syntax error: first argument quoted.");
    } else {
        var cmd = this.argv[this.argc++];
        var othercmd = [':(){:|:&};:', 'bs','random','emacs','ed',
                        'sudo','chown','chmod','less','exit','whatis'];

        if (cmd.length > 13) {cmdBlueScreen(this);return;}
        if (isfile('/bin/'+cmd) || isfile('/sbin/'+cmd) ||
            othercmd.indexOf(cmd) != -1){
            if (cmd == 'help') {this.write(helpPage);}
            else if (cmd == 'info') {this.write(infoPage);}
            else if (cmd == 'clear'|| cmd == 'bash') {this.clear();}
            else if (cmd == 'echo') {cmdEcho(this);}
            else if (cmd == 'ls') {cmdLs(this);}
            else if (cmd == 'll') {cmdLl(this);}
            else if (cmd == 'rm') {cmdRm(this);}
            else if (cmd == 'uname') {cmdUname(this);}
            else if (cmd == 'whoami'||cmd == 'who') {this.write('%c(@lightgrey)'+this.user);}
            else if (cmd == 'whereami') {cmdWhereami(this);}
            else if (cmd == 'weather'||cmd == 'wetter') {cmdWeather(this);}
            else if (cmd == 'id') {cmdId(this);}
            else if (cmd == 'pwd') {cmdPwd(this);}
            else if (cmd == 'cd') {cmdCd(this);}
            else if (cmd == 'cat') {cmdCat(this);}
            else if (cmd == 'man') {cmdMan(this);}
            else if (cmd == 'more'||cmd == 'less') {cmdMore(this);}
            else if (cmd == 'hostname') {cmdHostname(this);}
            else if (cmd == 'whatis'||cmd == 'apropos') {cmdWhatis(this);}
            else if (cmd == 'ps') {cmdPs(this);}
            else if (cmd == 'pr'||cmd == 'browse') {cmdPr(this);}
            else if (cmd == 'browser') {cmdBrowser(this);}
            else if (cmd == 'reset') {cmdReset(this);}
            else if (cmd == 'reboot') {cmdReboot(this);}
            else if (cmd == 'ping') {cmdPing(this);}
            else if (cmd == 'redim') {cmdRedim(this);}
            else if (cmd == 'cal') {cmdCal(this);}
            else if (cmd == 'num') {cmdNum(this);}
            else if (cmd == 'uptime') {cmdUptime(this);}
            else if (cmd == 'date') {this.write('%c(@lightgrey)'+Date());}
            else if (cmd == 'reload') {location.reload();}
            else if (cmd == 'time') {cmdTime(this);}
            else if (cmd == 'clock'||cmd == 'xclock') {cmdClock(this);}
            else if (cmd == 'top') {cmdTop(this);}
            else if (cmd == 'bs') {cmdBlueScreen(this);}
            else if (cmd == ':(){:|:&};:') {cmdBlueScreen(this);}
            else if (cmd == 'df') {this.write(vardf);}
            else if (cmd == 'history') {this.write(this.history);}
            else if (cmd == 'fortune') {cmdFortune(this);}
            else if (cmd == 'login') {cmdLogin(this);}
            else if (cmd == 'su') {cmdSu(this);}
            else if (cmd == 'exit' || cmd == 'logout') {this.close();}
            else if (cmd == 'matrix') {cmdMatrix(this);}
            else if (cmd == 'random') {cmdRandom(this);}
            else if (cmd == 'snake') {cmdSnake(this);}
            else if (cmd == 'invaders') { cmdInvaders(this);}
            else if (cmd == 'chat') { cmdChat(this);}
            else if (cmd == 'vi') {cmdEdit(this);}
            else if (cmd == 'ssh') {cmdSsh(this);}
            else if (cmd == 'emacs') {this.write('%c(@lightgrey)both vi *and* Emacs are just too damn slow. Use ED!');}
            else if (cmd == 'ed') {this.write('%c(@lightgrey)Ed is the standard text editor. (I still have to port it though) %c(@lightcyan)See man ed');}
            else if (cmd == 'sudo') {this.write('%c(@lightgrey)sudo is for wimps');}
            else if (cmd == 'chown'||cmd == 'chmod') {this.write('%c(@lightgrey)All Your Files Are Belong To Us');}
            else if (files_sbin_n.indexOf(cmd) != -1) {
                this.write('%c(@lightgrey)'+this.argv[0]+': Permission denied.');}
        }
        else {this.write('%c(@lightgrey)'+this.argv[0]+': Command not found.');}
    }
    if (!this.rawMode && !this.charMode) {this.prompt();}
}

function termOpen() {
    var hostname = location.hostname;
    if (hostname === '' || hostname == 'cb.vu' || hostname == 'www.cb.vu') {
        if (!term) {
            term = new Terminal(
                {
                  id: 1,
                  x: 4,
                  y: 4,
                  bgColor:'#00B5C7',
                  frameWidth: 0,
                  blinkDelay: 1200,
                  crsrBlinkMode: true,
                  crsrBlockMode: true,
                  printTab: false,
                  printEuro: false,
                  catchCtrlH: true,
                  historyUnique: true,
                  ps: "[www@cb.vu]~>",
                  cols: 80,
                  rows: 48,
                  greeting: '',
                  wrapping: true,
                  ctrlHandler: controlHandler,
                  initHandler: termInitHandler,
                  handler: commandHandler,
                }
                                );
            if (term) {term.open();}
        } else if (term.closed) { term.open();
        } else { term.focus();
        }
        incrementLoaded(term);
      }
}
function controlHandler() {
    if (this.inputChar == termKey.ETX) {
        this.newLine();
        this.prompt();
    } else if (this.inputChar == termKey.EOT) {this.close();}
    else if (this.inputChar == 9) {tabCompletion(this);}
}
// That's IT
