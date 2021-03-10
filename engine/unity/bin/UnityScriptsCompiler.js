/**
 * @version 1.0.7727.25783
 * @copyright anton
 * @compiler Bridge.NET 17.9.11-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AxisOptions start.*/
    Bridge.define("AxisOptions", {
        $kind: "enum",
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*AxisOptions end.*/

    /*BlobShadowMovement start.*/
    Bridge.define("BlobShadowMovement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Target: null,
            Offset: null,
            _Position: null
        },
        ctors: {
            init: function () {
                this.Offset = new UnityEngine.Vector3();
                this._Position = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*BlobShadowMovement.Update start.*/
            Update: function () {
                if (UnityEngine.Component.op_Equality(this.Target, null)) {
                    return;
                }

                this._Position = this.Target.position.$clone().add( (this.Target.forward.$clone().scale( this.Offset.z )) );
                this._Position.x += this.Offset.x;
                this._Position.y = this.Offset.y;

                this.transform.position = this._Position.$clone();
                this.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( -90, this.Target.rotation.getPositiveEulerAngles().y, 0 );
            },
            /*BlobShadowMovement.Update end.*/


        }
    });
    /*BlobShadowMovement end.*/

    /*Bot start.*/
    Bridge.define("Bot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            RaceCar: null,
            SplineMove: null,
            BotWheels: null
        },
        methods: {
            /*Bot.StartMove start.*/
            StartMove: function () {
                this.SplineMove.StartMove();
                this.BotWheels.IsRotating = true;
            },
            /*Bot.StartMove end.*/

            /*Bot.StopMove start.*/
            StopMove: function () {
                this.SplineMove.StartMove();
                this.SplineMove.Stop();
                this.BotWheels.IsRotating = false;
            },
            /*Bot.StopMove end.*/


        }
    });
    /*Bot end.*/

    /*BotWheels start.*/
    Bridge.define("BotWheels", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            RotationSpeed: 0,
            IsRotating: false,
            Wheels: null
        },
        ctors: {
            init: function () {
                this.RotationSpeed = 60;
                this.IsRotating = false;
            }
        },
        methods: {
            /*BotWheels.Start start.*/
            Start: function () {

            },
            /*BotWheels.Start end.*/

            /*BotWheels.Update start.*/
            Update: function () {
                var $t;
                if (!this.IsRotating) {
                    return;
                }

                $t = Bridge.getEnumerator(this.Wheels);
                try {
                    while ($t.moveNext()) {
                        var w = $t.Current;
                        w.transform.Rotate$1(pc.Vec3.RIGHT.clone(), this.RotationSpeed * UnityEngine.Time.deltaTime);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BotWheels.Update end.*/


        }
    });
    /*BotWheels end.*/

    /*ButtonInput start.*/
    Bridge.define("ButtonInput", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            IsInteractable: false,
            OnPointerDownEvent: null,
            OnPointerUpEvent: null,
            _RectTransform: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
                this.IsInteractable = true;
            }
        },
        methods: {
            /*ButtonInput.Start start.*/
            Start: function () {
                this._RectTransform = this.GetComponent(UnityEngine.RectTransform);
            },
            /*ButtonInput.Start end.*/

            /*ButtonInput.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                if (!this.IsInteractable) {
                    return;
                }
                !Bridge.staticEquals(this.OnPointerDownEvent, null) ? this.OnPointerDownEvent() : null;
            },
            /*ButtonInput.OnPointerDown end.*/

            /*ButtonInput.OnPointerUp start.*/
            OnPointerUp: function (eventData) {

                if (!this.IsInteractable) {
                    return;
                }

                !Bridge.staticEquals(this.OnPointerUpEvent, null) ? this.OnPointerUpEvent() : null;
            },
            /*ButtonInput.OnPointerUp end.*/


        }
    });
    /*ButtonInput end.*/

    /*CameraFollower start.*/
    Bridge.define("CameraFollower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Target: null,
            PositionOffset: null,
            RotationOffset: null,
            CameraSpeed: 0
        },
        ctors: {
            init: function () {
                this.PositionOffset = new UnityEngine.Vector3();
                this.RotationOffset = new UnityEngine.Vector3();
                this.CameraSpeed = 0.1;
            }
        },
        methods: {
            /*CameraFollower.FixedUpdate start.*/
            FixedUpdate: function () {

                //transform.position = Target.position + PositionOffset;

                var finalPosition = this.Target.position.$clone().add( this.PositionOffset );
                var lerpPosition = new pc.Vec3().lerp( this.transform.position, finalPosition, this.CameraSpeed );
                this.transform.position = lerpPosition.$clone();

                //transform.LookAt(Target);
                //transform.rotation = Quaternion.Euler(Target.rotation.eulerAngles + RotationOffset);

            },
            /*CameraFollower.FixedUpdate end.*/


        }
    });
    /*CameraFollower end.*/

    /*CameraInputDemo start.*/
    
    Bridge.define("CameraInputDemo", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            infoText: null,
            myMove: null
        },
        ctors: {
            init: function () {
                this.infoText = "Welcome to this customized input example";
            }
        },
        methods: {
            /*CameraInputDemo.Start start.*/
            Start: function () {
                this.myMove = this.gameObject.GetComponent(SWS.splineMove);
                this.myMove.StartMove();
                this.myMove.Pause();
            },
            /*CameraInputDemo.Start end.*/

            /*CameraInputDemo.Update start.*/
            Update: function () {
                //do nothing in moving state
                if (!DG.Tweening.TweenExtensions.IsActive(this.myMove.tween) || DG.Tweening.TweenExtensions.IsPlaying(this.myMove.tween)) {
                    return;
                }

                //on up arrow, move forwards
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.UpArrow)) {
                    this.myMove.Resume();
                }
            },
            /*CameraInputDemo.Update end.*/

            /*CameraInputDemo.OnGUI start.*/
            OnGUI: function () {
                //do nothing in moving state
                if (DG.Tweening.TweenExtensions.IsActive(this.myMove.tween) && DG.Tweening.TweenExtensions.IsPlaying(this.myMove.tween)) {
                    return;
                }

                //draw top right box with info text received from messages
                //GUI.Box(new Rect(Screen.width - 150, Screen.height / 2, 150, 100), "");
                //Rect infoPos = new Rect(Screen.width - 130, Screen.height / 2 + 10, 110, 90);
                //GUI.Label(infoPos, infoText);
            },
            /*CameraInputDemo.OnGUI end.*/

            /*CameraInputDemo.ShowInformation start.*/
            
            ShowInformation: function (text) {
                this.infoText = text;
            },
            /*CameraInputDemo.ShowInformation end.*/


        }
    });
    /*CameraInputDemo end.*/

    /*CarController start.*/
    Bridge.define("CarController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                k_ReversingThreshold: 0,
                NoOfGears: 0
            },
            ctors: {
                init: function () {
                    this.k_ReversingThreshold = 0.01;
                    this.NoOfGears = 5;
                }
            },
            methods: {
                /*CarController.CurveFactor:static start.*/
                CurveFactor: function (factor) {
                    return 1 - (1 - factor) * (1 - factor);
                },
                /*CarController.CurveFactor:static end.*/

                /*CarController.ULerp:static start.*/
                ULerp: function (from, to, value) {
                    return (1.0 - value) * from + value * to;
                },
                /*CarController.ULerp:static end.*/


            }
        },
        fields: {
            m_CarDriveType: 0,
            m_WheelColliders: null,
            m_WheelMeshes: null,
            m_WheelEffects: null,
            m_CentreOfMassOffset: null,
            m_MaximumSteerAngle: 0,
            m_SteerHelper: 0,
            m_TractionControl: 0,
            m_FullTorqueOverAllWheels: 0,
            TorqueMultiplier: 0,
            m_ReverseTorque: 0,
            m_MaxHandbrakeTorque: 0,
            m_Downforce: 0,
            m_SpeedType: 0,
            m_Topspeed: 0,
            m_RevRangeBoundary: 0,
            m_SlipLimit: 0,
            m_BrakeTorque: 0,
            m_WheelMeshLocalRotations: null,
            m_Prevpos: null,
            m_Pos: null,
            m_SteerAngle: 0,
            m_GearNum: 0,
            m_GearFactor: 0,
            m_OldRotation: 0,
            m_CurrentTorque: 0,
            m_Rigidbody: null,
            Skidding: false,
            BrakeInput: 0,
            Revs: 0,
            AccelInput: 0
        },
        props: {
            GearNum: {
                get: function () {
                    return this.m_GearNum;
                },
                set: function (value) {
                    this.m_GearNum = value;
                }
            },
            CurrentSteerAngle: {
                get: function () {
                    return this.m_SteerAngle;
                }
            },
            CurrentSpeed: {
                get: function () {
                    return this.m_Rigidbody.velocity.length() * 2.23693633;
                }
            },
            MaxSpeed: {
                get: function () {
                    return this.m_Topspeed;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_CentreOfMassOffset = new UnityEngine.Vector3();
                this.m_Prevpos = new UnityEngine.Vector3();
                this.m_Pos = new UnityEngine.Vector3();
                this.m_CarDriveType = CarDriveType.FourWheelDrive;
                this.m_WheelColliders = System.Array.init(4, null, UnityEngine.WheelCollider);
                this.m_WheelMeshes = System.Array.init(4, null, UnityEngine.GameObject);
                this.m_WheelEffects = System.Array.init(4, null, WheelEffects);
                this.TorqueMultiplier = 10;
                this.m_Downforce = 100.0;
                this.m_Topspeed = 200;
                this.m_RevRangeBoundary = 1.0;
            }
        },
        methods: {
            /*CarController.Start start.*/
            Start: function () {
                this.m_Rigidbody = this.GetComponent(UnityEngine.Rigidbody);

                this.m_WheelMeshLocalRotations = System.Array.init(4, function (){
                    return new UnityEngine.Quaternion();
                }, UnityEngine.Quaternion);
                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    this.m_WheelMeshLocalRotations[i] = this.m_WheelMeshes[i].transform.localRotation.$clone();
                }
                this.m_Rigidbody.centerOfMass = this.m_CentreOfMassOffset.$clone();

                this.m_MaxHandbrakeTorque = 3.40282347E+38;

                this.m_CurrentTorque = this.m_FullTorqueOverAllWheels - (this.m_TractionControl * this.m_FullTorqueOverAllWheels);

            },
            /*CarController.Start end.*/

            /*CarController.GearChanging start.*/
            GearChanging: function () {
                var f = Math.abs(this.CurrentSpeed / this.MaxSpeed);
                var upgearlimit = (1 / CarController.NoOfGears) * (((this.m_GearNum + 1) | 0));
                var downgearlimit = (1 / CarController.NoOfGears) * this.m_GearNum;

                if (this.m_GearNum > 0 && f < downgearlimit) {
                    this.m_GearNum = (this.m_GearNum - 1) | 0;
                }

                if (f > upgearlimit && (this.m_GearNum < (((CarController.NoOfGears - 1) | 0)))) {
                    this.m_GearNum = (this.m_GearNum + 1) | 0;
                }
            },
            /*CarController.GearChanging end.*/

            /*CarController.CalculateGearFactor start.*/
            CalculateGearFactor: function () {
                var $t, $t1;
                var f = (1 / CarController.NoOfGears);
                // gear factor is a normalised representation of the current speed within the current gear's range of speeds.
                // We smooth towards the 'target' gear factor, so that revs don't instantly snap up or down when changing gear.
                var targetGearFactor = ($t = f * (((this.m_GearNum + 1) | 0)), $t1 = f * this.m_GearNum, ( $t - $t1 ) === 0 ? 0 : ( ((Math.abs(this.CurrentSpeed / this.MaxSpeed) - $t1) / ($t - $t1)) ));
                this.m_GearFactor = pc.math.lerp(this.m_GearFactor, targetGearFactor, UnityEngine.Time.deltaTime * 5.0);
            },
            /*CarController.CalculateGearFactor end.*/

            /*CarController.CalculateRevs start.*/
            CalculateRevs: function () {
                // calculate engine revs (for display / sound)
                // (this is done in retrospect - revs are not used in force/power calculations)
                this.CalculateGearFactor();
                var gearNumFactor = this.m_GearNum / CarController.NoOfGears;
                var revsRangeMin = CarController.ULerp(0.0, this.m_RevRangeBoundary, CarController.CurveFactor(gearNumFactor));
                var revsRangeMax = CarController.ULerp(this.m_RevRangeBoundary, 1.0, gearNumFactor);
                this.Revs = CarController.ULerp(revsRangeMin, revsRangeMax, this.m_GearFactor);
            },
            /*CarController.CalculateRevs end.*/

            /*CarController.Move start.*/
            Move: function (steering, accel, footbrake, handbrake) {
                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    var quat = { v : new UnityEngine.Quaternion() };
                    var position = { v : new UnityEngine.Vector3() };
                    this.m_WheelColliders[i].GetWorldPose(position, quat);
                    //m_WheelMeshes[i].transform.position = position;
                    this.m_WheelMeshes[i].transform.rotation = quat.v.$clone();
                }

                //clamp input values
                steering = Math.max(-1, Math.min(steering, 1));
                this.AccelInput = (accel = Math.max(0, Math.min(accel, 1)));
                this.BrakeInput = (footbrake = -1 * Math.max(-1, Math.min(footbrake, 0)));
                handbrake = Math.max(0, Math.min(handbrake, 1));

                //Set the steer on the front wheels.
                //Assuming that wheels 0 and 1 are the front wheels.
                this.m_SteerAngle = steering * this.m_MaximumSteerAngle;
                this.m_WheelColliders[0].steerAngle = this.m_SteerAngle;
                this.m_WheelColliders[1].steerAngle = this.m_SteerAngle;

                this.SteerHelper();
                this.ApplyDrive(accel, footbrake);
                this.CapSpeed();

                //Set the handbrake.
                //Assuming that wheels 2 and 3 are the rear wheels.
                if (handbrake > 0.0) {
                    var hbTorque = handbrake * this.m_MaxHandbrakeTorque;
                    this.m_WheelColliders[2].brakeTorque = hbTorque;
                    this.m_WheelColliders[3].brakeTorque = hbTorque;
                }


                this.CalculateRevs();
                this.GearChanging();

                this.AddDownForce();
                this.CheckForWheelSpin();
                this.TractionControl();
            },
            /*CarController.Move end.*/

            /*CarController.CapSpeed start.*/
            CapSpeed: function () {
                var speed = this.m_Rigidbody.velocity.length();
                switch (this.m_SpeedType) {
                    case SpeedType.MPH: 
                        speed *= 2.23693633;
                        if (speed > this.m_Topspeed) {
                            this.m_Rigidbody.velocity = this.m_Rigidbody.velocity.clone().normalize().$clone().scale( (this.m_Topspeed / 2.23693633) );
                        }
                        break;
                    case SpeedType.KPH: 
                        speed *= 3.6;
                        if (speed > this.m_Topspeed) {
                            this.m_Rigidbody.velocity = this.m_Rigidbody.velocity.clone().normalize().$clone().scale( (this.m_Topspeed / 3.6) );
                        }
                        break;
                }
            },
            /*CarController.CapSpeed end.*/

            /*CarController.ApplyDrive start.*/
            ApplyDrive: function (accel, footbrake) {
                var thrustTorque;
                switch (this.m_CarDriveType) {
                    case CarDriveType.FourWheelDrive: 
                        thrustTorque = accel * (this.m_CurrentTorque); //4f);
                        for (var i = 0; i < 4; i = (i + 1) | 0) {
                            this.m_WheelColliders[i].motorTorque = thrustTorque;
                        }
                        break;
                    case CarDriveType.FrontWheelDrive: 
                        thrustTorque = accel * (this.m_CurrentTorque / 2.0);
                        this.m_WheelColliders[0].motorTorque = (this.m_WheelColliders[1].motorTorque = thrustTorque, thrustTorque);
                        break;
                    case CarDriveType.RearWheelDrive: 
                        thrustTorque = accel * (this.m_CurrentTorque / 2.0);
                        this.m_WheelColliders[2].motorTorque = (this.m_WheelColliders[3].motorTorque = thrustTorque, thrustTorque);
                        break;
                }

                for (var i1 = 0; i1 < 4; i1 = (i1 + 1) | 0) {
                    if (this.CurrentSpeed > 5 && Math.acos( pc.math.clamp( this.transform.forward.clone().normalize().dot( this.m_Rigidbody.velocity.clone().normalize() ), -1, 1 ) ) * pc.math.RAD_TO_DEG < 50.0) {
                        this.m_WheelColliders[i1].brakeTorque = this.m_BrakeTorque * footbrake;
                    } else if (footbrake > 0) {
                        this.m_WheelColliders[i1].brakeTorque = 0.0;
                        this.m_WheelColliders[i1].motorTorque = -this.m_ReverseTorque * footbrake;
                    }
                }
            },
            /*CarController.ApplyDrive end.*/

            /*CarController.SteerHelper start.*/
            SteerHelper: function () {
                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    var wheelhit = { v : new UnityEngine.WheelHit() };
                    this.m_WheelColliders[i].GetGroundHit(wheelhit);
                    if (pc.Vec3.equals( wheelhit.v.normal, pc.Vec3.ZERO.clone() )) {
                        return;
                    } // wheels arent on the ground so dont realign the rigidbody velocity
                }

                // this if is needed to avoid gimbal lock problems that will make the car suddenly shift direction
                if (Math.abs(this.m_OldRotation - this.transform.eulerAngles.y) < 10.0) {
                    var turnadjust = (this.transform.eulerAngles.y - this.m_OldRotation) * this.m_SteerHelper;
                    var velRotation = new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), turnadjust );
                    this.m_Rigidbody.velocity = velRotation.transformVector( this.m_Rigidbody.velocity );
                }
                this.m_OldRotation = this.transform.eulerAngles.y;
            },
            /*CarController.SteerHelper end.*/

            /*CarController.RemoveTorque start.*/
            RemoveTorque: function () {
                if (this.m_WheelColliders[0].motorTorque < 0) {
                    for (var i = 0; i < 4; i = (i + 1) | 0) {
                        this.m_WheelColliders[i].brakeTorque = 0.0;
                        this.m_WheelColliders[i].motorTorque = 0;
                    }
                }
            },
            /*CarController.RemoveTorque end.*/

            /*CarController.AddDownForce start.*/
            AddDownForce: function () {
                this.m_Rigidbody.AddForce$1(this.transform.up.$clone().scale( -1 ).scale( this.m_Downforce ).scale( this.m_Rigidbody.velocity.length() ));
            },
            /*CarController.AddDownForce end.*/

            /*CarController.CheckForWheelSpin start.*/
            CheckForWheelSpin: function () {
                // loop through all wheels
                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    var wheelHit = { v : new UnityEngine.WheelHit() };
                    this.m_WheelColliders[i].GetGroundHit(wheelHit);

                    // is the tire slipping above the given threshhold
                    if (Math.abs(wheelHit.v.forwardSlip) >= this.m_SlipLimit || Math.abs(wheelHit.v.sidewaysSlip) >= this.m_SlipLimit) {
                        this.m_WheelEffects[i].EmitTyreSmoke();

                        // avoiding all four tires screeching at the same time
                        // if they do it can lead to some strange audio artefacts
                        if (!this.AnySkidSoundPlaying()) {
                            this.m_WheelEffects[i].PlayAudio();
                        }
                        continue;
                    }

                    // if it wasnt slipping stop all the audio
                    if (this.m_WheelEffects[i].PlayingAudio) {
                        this.m_WheelEffects[i].StopAudio();
                    }
                    // end the trail generation
                    this.m_WheelEffects[i].EndSkidTrail();
                }
            },
            /*CarController.CheckForWheelSpin end.*/

            /*CarController.TractionControl start.*/
            TractionControl: function () {
                var wheelHit = { v : new UnityEngine.WheelHit() };
                switch (this.m_CarDriveType) {
                    case CarDriveType.FourWheelDrive: 
                        // loop through all wheels
                        for (var i = 0; i < 4; i = (i + 1) | 0) {
                            this.m_WheelColliders[i].GetGroundHit(wheelHit);

                            this.AdjustTorque(wheelHit.v.forwardSlip);
                        }
                        break;
                    case CarDriveType.RearWheelDrive: 
                        this.m_WheelColliders[2].GetGroundHit(wheelHit);
                        this.AdjustTorque(wheelHit.v.forwardSlip);
                        this.m_WheelColliders[3].GetGroundHit(wheelHit);
                        this.AdjustTorque(wheelHit.v.forwardSlip);
                        break;
                    case CarDriveType.FrontWheelDrive: 
                        this.m_WheelColliders[0].GetGroundHit(wheelHit);
                        this.AdjustTorque(wheelHit.v.forwardSlip);
                        this.m_WheelColliders[1].GetGroundHit(wheelHit);
                        this.AdjustTorque(wheelHit.v.forwardSlip);
                        break;
                }
            },
            /*CarController.TractionControl end.*/

            /*CarController.AdjustTorque start.*/
            AdjustTorque: function (forwardSlip) {
                if (forwardSlip >= this.m_SlipLimit && this.m_CurrentTorque >= 0) {
                    this.m_CurrentTorque -= this.TorqueMultiplier * this.m_TractionControl;
                } else {
                    this.m_CurrentTorque += this.TorqueMultiplier * this.m_TractionControl;
                    if (this.m_CurrentTorque > this.m_FullTorqueOverAllWheels) {
                        this.m_CurrentTorque = this.m_FullTorqueOverAllWheels;
                    }
                }
            },
            /*CarController.AdjustTorque end.*/

            /*CarController.RemoveBrakeTorque start.*/
            RemoveBrakeTorque: function () {
                this.m_WheelColliders[2].brakeTorque = 0;
                this.m_WheelColliders[3].brakeTorque = 0;
            },
            /*CarController.RemoveBrakeTorque end.*/

            /*CarController.AnySkidSoundPlaying start.*/
            AnySkidSoundPlaying: function () {
                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    if (this.m_WheelEffects[i].PlayingAudio) {
                        return true;
                    }
                }
                return false;
            },
            /*CarController.AnySkidSoundPlaying end.*/


        }
    });
    /*CarController end.*/

    /*CarDriveType start.*/
    Bridge.define("CarDriveType", {
        $kind: "enum",
        statics: {
            fields: {
                FrontWheelDrive: 0,
                RearWheelDrive: 1,
                FourWheelDrive: 2
            }
        }
    });
    /*CarDriveType end.*/

    /*CarTrigger start.*/
    Bridge.define("CarTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            OnTriggerEnterEvent: null,
            OnTriggerStayEvent: null,
            OnTriggerExitEvent: null
        },
        methods: {
            /*CarTrigger.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (UnityEngine.MonoBehaviour.op_Equality(other.gameObject.GetComponent(CarController), null)) {
                    return;
                }

                this.OnTriggerEnterEvent.Invoke();
            },
            /*CarTrigger.OnTriggerEnter end.*/

            /*CarTrigger.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
                if (UnityEngine.MonoBehaviour.op_Equality(other.gameObject.GetComponent(CarController), null)) {
                    return;
                }

                this.OnTriggerStayEvent.Invoke();
            },
            /*CarTrigger.OnTriggerStay end.*/

            /*CarTrigger.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
                if (UnityEngine.MonoBehaviour.op_Equality(other.gameObject.GetComponent(CarController), null)) {
                    return;
                }

                this.OnTriggerExitEvent.Invoke();
            },
            /*CarTrigger.OnTriggerExit end.*/


        }
    });
    /*CarTrigger end.*/

    /*CarUserControl start.*/
    Bridge.define("CarUserControl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            m_Car: null,
            _Joystick: null,
            _GasButton: null,
            CanMove: false,
            _Handbrake: false,
            _GasInput: 0
        },
        ctors: {
            init: function () {
                this._Handbrake = false;
            }
        },
        methods: {
            /*CarUserControl.Awake start.*/
            Awake: function () {
                // get the car controller
                this.m_Car = this.GetComponent(CarController);

                this._GasButton.OnPointerDownEvent = Bridge.fn.combine(this._GasButton.OnPointerDownEvent, Bridge.fn.cacheBind(this, this.OnPointerDownHandler));
                this._GasButton.OnPointerUpEvent = Bridge.fn.combine(this._GasButton.OnPointerUpEvent, Bridge.fn.cacheBind(this, this.OnPointerUpHandler));
            },
            /*CarUserControl.Awake end.*/

            /*CarUserControl.OnPointerDownHandler start.*/
            OnPointerDownHandler: function () {
                this._GasInput = 1;
            },
            /*CarUserControl.OnPointerDownHandler end.*/

            /*CarUserControl.OnPointerUpHandler start.*/
            OnPointerUpHandler: function () {
                this._GasInput = 0;
            },
            /*CarUserControl.OnPointerUpHandler end.*/

            /*CarUserControl.FixedUpdate start.*/
            FixedUpdate: function () {

                if (this._Handbrake) {

                    this.m_Car.Move(0, 0, 0, 0);
                    return;
                }


                if (!this.CanMove) {
                    return;
                }

                var h = this._Joystick.Horizontal;
                var v = this._Joystick.Vertical;
                var gas = this._GasInput;


                if (this.m_Car.GearNum === 0) {
                    this.m_Car.TorqueMultiplier = 100;
                } else {
                    this.m_Car.TorqueMultiplier = 10;
                }

                this.m_Car.Move(h, 0, 0, 0);


                if (v >= 0 && Math.abs(gas) > 0.001) {
                    this.m_Car.Move(h, gas, gas, 0);

                    if (gas > 0) {
                        this.m_Car.RemoveBrakeTorque();
                        this.m_Car.RemoveTorque();
                    }
                } else if (v < 0.1 && Math.abs(gas) > 0.001) {
                    // 0 as first arg seems to cause some math issues in Luna
                    //m_Car.Move(0, 0, 0, 1);
                    this.m_Car.Move(h, 0, -gas, 0);
                } else {
                    this.m_Car.Move(h, 0, 0, 0);
                }
            },
            /*CarUserControl.FixedUpdate end.*/

            /*CarUserControl.ActivateHandbrake start.*/
            ActivateHandbrake: function () {
                this._Handbrake = true;
            },
            /*CarUserControl.ActivateHandbrake end.*/

            /*CarUserControl.DeactivateHandbrake start.*/
            DeactivateHandbrake: function () {
                this._Handbrake = false;
            },
            /*CarUserControl.DeactivateHandbrake end.*/


        }
    });
    /*CarUserControl end.*/

    /*Checkpoint start.*/
    Bridge.define("Checkpoint", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                OnCheckpointPassed: null
            }
        },
        fields: {
            _Passed: false
        },
        methods: {
            /*Checkpoint.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                var car = other.GetComponent(RaceCar);
                if (UnityEngine.MonoBehaviour.op_Equality(car, null)) {
                    return;
                }

                if (car.Owner === RaceCar.OwnerType.PLAYER && this._Passed === false) {
                    this._Passed = true;

                    car.Score = (car.Score + 1000) | 0;
                } else {
                    car.Score = (car.Score + 1000) | 0;
                }

                !Bridge.staticEquals(Checkpoint.OnCheckpointPassed, null) ? Checkpoint.OnCheckpointPassed() : null;
            },
            /*Checkpoint.OnTriggerEnter end.*/


        }
    });
    /*Checkpoint end.*/

    /*Countdown start.*/
    Bridge.define("Countdown", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            CountdownText: null,
            Go_Image: null,
            Outline: null,
            MainWindow: null
        },
        methods: {
            /*Countdown.Start start.*/
            Start: function () {
                this.Go_Image.transform.localScale = pc.Vec3.ZERO.clone();
                this.CountdownText.transform.localScale = pc.Vec3.ZERO.clone();
            },
            /*Countdown.Start end.*/

            /*Countdown.StartCountdown start.*/
            StartCountdown: function (onCountdownEnded) {
                //MainWindow.alpha = 0;

                this.CountdownText.text = "3";
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.CountdownText.transform, 1, 1), 0), Bridge.fn.bind(this, function () {
                    this.CountdownText.text = "2";
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.CountdownText.transform, 1, 1), 0), Bridge.fn.bind(this, function () {
                        this.CountdownText.text = "1";
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.CountdownText.transform, 1, 1), 0), Bridge.fn.bind(this, function () {
                            this.CountdownText.enabled = false;
                            //MainWindow.DOFade(1, 1f).From(0);
                            //CountdownText.text = "GO";
                            //Shadow.effectColor = Color.clear;
                            !Bridge.staticEquals(onCountdownEnded, null) ? onCountdownEnded() : null;
                            DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.Go_Image.transform, 1.5, 0.5), 0), Bridge.fn.bind(this, function () {
                                //Color color = CountdownText.color;
                                //color.a = 0;
                                //CountdownText.DOColor(color, 0.5f);
                                DG.Tweening.DOTweenModuleUI.DOFade(this.Go_Image, 0, 0.5);
                            }));
                        }));
                    }));
                }));
            },
            /*Countdown.StartCountdown end.*/


        }
    });
    /*Countdown end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       strength      The shake strength
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {UnityEngine.Vector2}          strength      The shake strength on each axis
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position.$clone());
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color.$clone());
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
                    var t;
                    var rBody = tweenRigidbody ? target.GetComponent(UnityEngine.Rigidbody) : null;
                    if (tweenRigidbody && UnityEngine.Component.op_Inequality(rBody, null)) {
                        t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                    } else {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            Interactable: false,
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            handleRect: null,
            baseRect: null,
            canvas: null,
            cam: null,
            input: null,
            tempInput: null
        },
        props: {
            Horizontal: {
                get: function () {
                    return (this.snapX) ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
                    return (this.snapY) ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
                }
            },
            Direction: {
                get: function () {
                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            },
            HandleRange: {
                get: function () {
                    return this.handleRange;
                },
                set: function (value) {
                    this.handleRange = Math.abs(value);
                }
            },
            DeadZone: {
                get: function () {
                    return this.deadZone;
                },
                set: function (value) {
                    this.deadZone = Math.abs(value);
                }
            },
            AxisOptions: {
                get: function () {
                    return this.AxisOptions;
                },
                set: function (value) {
                    this.axisOptions = value;
                }
            },
            SnapX: {
                get: function () {
                    return this.snapX;
                },
                set: function (value) {
                    this.snapX = value;
                }
            },
            SnapY: {
                get: function () {
                    return this.snapY;
                },
                set: function (value) {
                    this.snapY = value;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
                this.input = new UnityEngine.Vector2();
                this.tempInput = new UnityEngine.Vector2();
                this.Interactable = true;
                this.handleRange = 1;
                this.deadZone = 0;
                this.axisOptions = AxisOptions.Both;
                this.snapX = false;
                this.snapY = false;
                this.input = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*Joystick.Start start.*/
            Start: function () {
                this.HandleRange = this.handleRange;
                this.DeadZone = this.deadZone;
                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    console.error("The Joystick is not placed inside a canvas");
                }

                var center = new pc.Vec2( 0.5, 0.5 );

                this.background.pivot = center.$clone();
                this.handleRect.anchorMin = center.$clone();
                this.handleRect.anchorMax = center.$clone();
                this.handleRect.pivot = center.$clone();
                this.handleRect.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                this.OnDrag(eventData);

            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {


                this.cam = null;
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;
                }

                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position.$clone());
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2 ) );

                /* if (!Interactable)
                {
                   tempInput = (eventData.position - position) / (radius * canvas.scaleFactor);

                   if (tempInput.magnitude > 1)
                   {
                       tempInput = tempInput.normalized;
                   }

                   handleRect.anchoredPosition = tempInput * radius * handleRange;
                   return;
                }*/

                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize().$clone(), radius.$clone(), this.cam);
                this.handleRect.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
                /* if (!Interactable)
                {
                   tempInput = Vector2.zero;
                }*/

                this.input = pc.Vec2.ZERO.clone();
                this.handleRect.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
                if (magnitude > this.deadZone) {
                    if (magnitude > 1) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.HandleInput end.*/

            /*Joystick.FormatInput start.*/
            FormatInput: function () {
                if (this.axisOptions === AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else {
                    if (this.axisOptions === AxisOptions.Vertical) {
                        this.input = new pc.Vec2( 0.0, this.input.y );
                    }
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
                if (value === 0) {
                    return value;
                }

                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    if (snapAxis === AxisOptions.Horizontal) {
                        if (angle < 22.5 || angle > 157.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    } else if (snapAxis === AxisOptions.Vertical) {
                        if (angle > 67.5 && angle < 112.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    }
                    return value;
                } else {
                    if (value > 0) {
                        return 1;
                    }
                    if (value < 0) {
                        return -1;
                    }
                }
                return 0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( (this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta )) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*Joystick.ScreenPointToAnchoredPosition end.*/


        }
    });
    /*Joystick end.*/

    /*EndGameButton start.*/
    Bridge.define("EndGameButton", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _Button: null
        },
        methods: {
            /*EndGameButton.Start start.*/
            Start: function () {
                this._Button = this.GetComponent(UnityEngine.UI.Button);

                this._Button.onClick.AddListener(function () {
                    Luna.Unity.Playable.InstallFullGame();
                    Luna.Unity.LifeCycle.GameEnded();
                    //JavaScriptInterface leads to android API
                    JavaScriptInterface.closeWebContent(this.RaceCar.Wheat);
                });
            },
            /*EndGameButton.Start end.*/


        }
    });
    /*EndGameButton end.*/

    /*EventReceiver start.*/
    
    Bridge.define("EventReceiver", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*EventReceiver.MyMethod start.*/
            MyMethod: function () {
                //your own method!
            },
            /*EventReceiver.MyMethod end.*/

            /*EventReceiver.PrintText start.*/
            PrintText: function (text) {
                console.log(text);
            },
            /*EventReceiver.PrintText end.*/

            /*EventReceiver.RotateSprite start.*/
            RotateSprite: function (newRot) {
                var currentRot = this.transform.eulerAngles.$clone();
                currentRot.y = newRot;
                this.transform.eulerAngles = currentRot.$clone();
            },
            /*EventReceiver.RotateSprite end.*/

            /*EventReceiver.SetDestination start.*/
            SetDestination: function (target) {
                this.StartCoroutine$1(this.SetDestinationRoutine(target));
            },
            /*EventReceiver.SetDestination end.*/

            /*EventReceiver.SetDestinationRoutine start.*/
            SetDestinationRoutine: function (target) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    tar,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    //get references
                                        //NavMeshAgent agent = GetComponent<NavMeshAgent>();
                                        //navMove myMove = GetComponent<navMove>();
                                        tar = Bridge.cast(target, UnityEngine.GameObject);

                                        //increase agent speed
                                        //myMove.ChangeSpeed(4);
                                        //set new destination of the navmesh agent
                                        //agent.SetDestination(tar.transform.position);

                                        //wait until the path has been calculated
                                        //while (agent.pathPending)
                                        //yield return null;
                                        //wait until agent reached its destination
                                        /* float remain = agent.remainingDistance;
                                        while (remain == Mathf.Infinity || remain - agent.stoppingDistance > float.Epsilon
                                        || agent.pathStatus != NavMeshPathStatus.PathComplete)
                                        {
                                           remain = agent.remainingDistance;
                                           yield return null;
                                        }*/

                                        //wait a few seconds at the destination,
                                        //then decrease agent speed and restart movement routine
                                        $enumerator.current = new UnityEngine.WaitForSeconds(4);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    /* myMove.ChangeSpeed(1.5f);
                                        myMove.moveToPath = true;
                                        myMove.StartMove();*/

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*EventReceiver.SetDestinationRoutine end.*/

            /*EventReceiver.ActivateForTime start.*/
            ActivateForTime: function (target) {
                this.StartCoroutine$1(this.ActivateForTimeRoutine(target));
            },
            /*EventReceiver.ActivateForTime end.*/

            /*EventReceiver.ActivateForTimeRoutine start.*/
            ActivateForTimeRoutine: function (target) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    tar,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    tar = Bridge.cast(target, UnityEngine.GameObject);
                                        tar.SetActive(true);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(6);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    tar.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*EventReceiver.ActivateForTimeRoutine end.*/


        }
    });
    /*EventReceiver end.*/

    /*FinishTrigger start.*/
    Bridge.define("FinishTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _MainScreen: null,
            _WinScren: null,
            _LossScreen: null,
            _Opponent: null,
            _IsPassed: false,
            _LevelWon: false
        },
        ctors: {
            init: function () {
                this._IsPassed = false;
                this._LevelWon = false;
            }
        },
        methods: {
            /*FinishTrigger.Start start.*/
            Start: function () {

                this._WinScren.gameObject.SetActive(false);
                this._LossScreen.gameObject.SetActive(false);
            },
            /*FinishTrigger.Start end.*/

            /*FinishTrigger.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (this._IsPassed) {
                    return;
                }

                var car = other.gameObject.GetComponent(CarUserControl);

                if (UnityEngine.MonoBehaviour.op_Equality(this._Opponent, null)) {
                    this._Opponent = other.gameObject.GetComponent(Bot);
                }


                if (UnityEngine.MonoBehaviour.op_Inequality(car, null)) {
                    this._IsPassed = true;

                    DG.Tweening.DOTweenModuleUI.DOFade(this._MainScreen, 0, 0.25);
                    car.ActivateHandbrake();
                    if (UnityEngine.MonoBehaviour.op_Equality(this._Opponent, null)) {
                        this._LevelWon = true;
                        DG.Tweening.TweenSettingsExtensions.From$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions, DG.Tweening.DOTweenModuleUI.DOFade(this._WinScren, 1, 0.25), 0);
                        this._WinScren.gameObject.SetActive(true);

                        Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.LevelWon, 1);
                    } else {
                        this._LevelWon = false;
                        DG.Tweening.TweenSettingsExtensions.From$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions, DG.Tweening.DOTweenModuleUI.DOFade(this._LossScreen, 1, 0.25), 0);
                        this._LossScreen.gameObject.SetActive(true);

                        Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.LevelFailed, 1);
                    }

                    Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
                }

            },
            /*FinishTrigger.OnTriggerEnter end.*/


        }
    });
    /*FinishTrigger end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            MainCamera: null,
            LandscapeFov: 0,
            PortraitFov: 0,
            WheatCullDistance: 0,
            CountdownWidget: null,
            Joystick: null,
            JoystickTutorialButton: null,
            GasButton: null,
            TutorialWindow: null,
            MainBackroundImage: null,
            Opponents: null,
            PlayerCar: null,
            CarUserControl: null,
            Position: 0,
            LastCheckpoint: null,
            _WheatCullDistance: 0,
            _Wheat: null,
            _PlayerDistance: 0,
            _OpponentDistance: 0
        },
        ctors: {
            init: function () {
                this.LandscapeFov = 45;
                this.PortraitFov = 60;
                this.WheatCullDistance = 50;
                this.Opponents = System.Array.init(0, null, Bot);
                this.Position = 0;
                this._WheatCullDistance = 50;
                this._Wheat = System.Array.init(0, null, UnityEngine.Transform);
            }
        },
        methods: {
            /*GameManager.Start start.*/
            Start: function () {
                var $t;

                var screenRatio = (((Bridge.Int.div(UnityEngine.Screen.width, UnityEngine.Screen.height)) | 0));
                if (screenRatio >= 1) {
                    // Landscape Layout
                    this.MainCamera.fieldOfView = this.LandscapeFov;
                } else if (screenRatio < 1) {
                    // Portrait Layout
                    this.MainCamera.fieldOfView = this.PortraitFov;
                }

                //float[] distances = new float[32];
                //distances[8] = WheatCullDistance;
                //MainCamera.layerCullDistances = distances;

                Luna.Unity.LifeCycle.addOnPause(Bridge.fn.cacheBind(this, this.PauseGameplay));
                Luna.Unity.LifeCycle.addOnResume(Bridge.fn.cacheBind(this, this.ResumeGameplay));

                //CountdownWidget.OnCountdownEnded += OnCountdownEndedHandler;
                Checkpoint.OnCheckpointPassed = Bridge.fn.combine(Checkpoint.OnCheckpointPassed, Bridge.fn.cacheBind(this, this.UpdatePositions));
                Checkpoint.OnCheckpointPassed = Bridge.fn.combine(Checkpoint.OnCheckpointPassed, Bridge.fn.cacheBind(this, this.WheatCull));

                this.JoystickTutorialButton.OnPointerDownEvent = Bridge.fn.combine(this.JoystickTutorialButton.OnPointerDownEvent, Bridge.fn.cacheBind(this, this.OnEndTutorialHandler));
                this.GasButton.OnPointerDownEvent = Bridge.fn.combine(this.GasButton.OnPointerDownEvent, Bridge.fn.cacheBind(this, this.OnEndTutorialHandler));

                this.Joystick.Interactable = false;
                this.CarUserControl.CanMove = false;

                this.WheatCull();

                $t = Bridge.getEnumerator(this.Opponents);
                try {
                    while ($t.moveNext()) {
                        var o = $t.Current;
                        o.StopMove();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.TutorialStarted);
            },
            /*GameManager.Start end.*/

            /*GameManager.StartGame start.*/
            StartGame: function () {
                this.CountdownWidget.StartCountdown(Bridge.fn.cacheBind(this, this.OnCountdownEndedHandler));
            },
            /*GameManager.StartGame end.*/

            /*GameManager.OnCountdownEndedHandler start.*/
            OnCountdownEndedHandler: function () {
                var $t;
                this.Joystick.Interactable = true;
                this.CarUserControl.CanMove = true;
                $t = Bridge.getEnumerator(this.Opponents);
                try {
                    while ($t.moveNext()) {
                        var o = $t.Current;
                        o.StartMove();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameManager.OnCountdownEndedHandler end.*/

            /*GameManager.UpdatePositions start.*/
            UpdatePositions: function () {
                var $t;
                var tempPosition = 0;
                $t = Bridge.getEnumerator(this.Opponents);
                try {
                    while ($t.moveNext()) {
                        var opponent = $t.Current;
                        this._PlayerDistance = pc.Vec3.distance( this.PlayerCar.transform.position, this.LastCheckpoint.position );
                        this._OpponentDistance = pc.Vec3.distance( opponent.RaceCar.transform.position, this.LastCheckpoint.position );
                        //Debug.Log($"Opp score: {opponent.RaceCar.Score} Distance: {_OpponentDistance}  ||  Player score: {PlayerCar.Score} Distance: {_PlayerDistance}");
                        if ((opponent.RaceCar.Score - this._OpponentDistance) > (this.PlayerCar.Score - this._PlayerDistance)) {
                            tempPosition = (tempPosition + 1) | 0;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.Position = tempPosition;
            },
            /*GameManager.UpdatePositions end.*/

            /*GameManager.OnEndTutorialHandler start.*/
            OnEndTutorialHandler: function () {
                Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.TutorialComplete);

                this.JoystickTutorialButton.IsInteractable = false;

                UnityEngine.Object.Destroy(this.JoystickTutorialButton);
                this.GasButton.OnPointerDownEvent = Bridge.fn.remove(this.GasButton.OnPointerDownEvent, Bridge.fn.cacheBind(this, this.OnEndTutorialHandler));

                DG.Tweening.DOTweenModuleUI.DOFade$2(this.MainBackroundImage, 0, 0.5);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(this.TutorialWindow, 0, 0.5), Bridge.fn.bind(this, function () {
                    this.StartGame();
                }));

            },
            /*GameManager.OnEndTutorialHandler end.*/

            /*GameManager.WheatCull start.*/
            WheatCull: function () {
                var $t;
                $t = Bridge.getEnumerator(this._Wheat);
                try {
                    while ($t.moveNext()) {
                        var t = $t.Current;
                        if (this._WheatCullDistance >= pc.Vec3.distance( this.PlayerCar.transform.position, t.position )) {
                            t.gameObject.SetActive(true);
                        } else {
                            t.gameObject.SetActive(false);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameManager.WheatCull end.*/

            /*GameManager.PauseGameplay start.*/
            PauseGameplay: function () {
                UnityEngine.Time.timeScale = 0;
            },
            /*GameManager.PauseGameplay end.*/

            /*GameManager.ResumeGameplay start.*/
            ResumeGameplay: function () {
                UnityEngine.Time.timeScale = 1;
            },
            /*GameManager.ResumeGameplay end.*/

            /*GameManager.ReloadScene start.*/
            ReloadScene: function () {
                UnityEngine.SceneManagement.SceneManager.LoadScene$2(UnityEngine.SceneManagement.SceneManager.GetActiveScene().name);
            },
            /*GameManager.ReloadScene end.*/

            /*GameManager.OnDestroy start.*/
            OnDestroy: function () {
                Luna.Unity.LifeCycle.removeOnPause(Bridge.fn.cacheBind(this, this.PauseGameplay));
                Luna.Unity.LifeCycle.removeOnResume(Bridge.fn.cacheBind(this, this.ResumeGameplay));

                Checkpoint.OnCheckpointPassed = Bridge.fn.remove(Checkpoint.OnCheckpointPassed, Bridge.fn.cacheBind(this, this.UpdatePositions));
                Checkpoint.OnCheckpointPassed = Bridge.fn.remove(Checkpoint.OnCheckpointPassed, Bridge.fn.cacheBind(this, this.WheatCull));

                this.JoystickTutorialButton.OnPointerDownEvent = Bridge.fn.remove(this.JoystickTutorialButton.OnPointerDownEvent, Bridge.fn.cacheBind(this, this.OnEndTutorialHandler));
                this.GasButton.OnPointerDownEvent = Bridge.fn.remove(this.GasButton.OnPointerDownEvent, Bridge.fn.cacheBind(this, this.OnEndTutorialHandler));

                //CountdownWidget.OnCountdownEnded -= OnCountdownEndedHandler;
            },
            /*GameManager.OnDestroy end.*/


        }
    });
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*JoystickPlayerExample start.*/
    Bridge.define("JoystickPlayerExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            variableJoystick: null,
            rb: null
        },
        methods: {
            /*JoystickPlayerExample.FixedUpdate start.*/
            FixedUpdate: function () {
                var direction = new pc.Vec3( 0, 0, 1 ).scale( this.variableJoystick.Vertical ).add( pc.Vec3.RIGHT.clone().scale( this.variableJoystick.Horizontal ) );
                this.rb.AddForce$1(direction.$clone().scale( this.speed ).scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.VelocityChange);
            },
            /*JoystickPlayerExample.FixedUpdate end.*/


        }
    });
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    Bridge.define("JoystickSetterExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            variableJoystick: null,
            valueText: null,
            background: null,
            axisSprites: null
        },
        methods: {
            /*JoystickSetterExample.ModeChanged start.*/
            ModeChanged: function (index) {
                switch (index) {
                    case 0: 
                        this.variableJoystick.SetMode(JoystickType.Fixed);
                        break;
                    case 1: 
                        this.variableJoystick.SetMode(JoystickType.Floating);
                        break;
                    case 2: 
                        this.variableJoystick.SetMode(JoystickType.Dynamic);
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.ModeChanged end.*/

            /*JoystickSetterExample.AxisChanged start.*/
            AxisChanged: function (index) {
                switch (index) {
                    case 0: 
                        this.variableJoystick.AxisOptions = AxisOptions.Both;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 1: 
                        this.variableJoystick.AxisOptions = AxisOptions.Horizontal;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 2: 
                        this.variableJoystick.AxisOptions = AxisOptions.Vertical;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.AxisChanged end.*/

            /*JoystickSetterExample.SnapX start.*/
            SnapX: function (value) {
                this.variableJoystick.SnapX = value;
            },
            /*JoystickSetterExample.SnapX end.*/

            /*JoystickSetterExample.SnapY start.*/
            SnapY: function (value) {
                this.variableJoystick.SnapY = value;
            },
            /*JoystickSetterExample.SnapY end.*/

            /*JoystickSetterExample.Update start.*/
            Update: function () {
                this.valueText.text = "Current Value: " + this.variableJoystick.Direction;
            },
            /*JoystickSetterExample.Update end.*/


        }
    });
    /*JoystickSetterExample end.*/

    /*JoystickType start.*/
    Bridge.define("JoystickType", {
        $kind: "enum",
        statics: {
            fields: {
                Fixed: 0,
                Floating: 1,
                Dynamic: 2
            }
        }
    });
    /*JoystickType end.*/

    /*LunaUIFields start.*/
    Bridge.define("LunaUIFields", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            GasHintText: null,
            GasHintString: null,
            SteerHintText: null,
            SteerHintString: null,
            ObjectiveHintText: null,
            ObjectiveHintString: null,
            LevelFailedButtonText: null,
            LevelFailedButtonString: null,
            LevelCompleteButtonText: null,
            LevelCompleteButtonString: null
        },
        methods: {
            /*LunaUIFields.Start start.*/
            Start: function () {
                this.GasHintText.text = this.GasHintString;
                this.SteerHintText.text = this.SteerHintString;
                this.ObjectiveHintText.text = this.ObjectiveHintString;

                this.LevelFailedButtonText.text = this.LevelFailedButtonString;
                this.LevelCompleteButtonText.text = this.LevelCompleteButtonString;

            },
            /*LunaUIFields.Start end.*/


        }
    });
    /*LunaUIFields end.*/

    /*PathInputDemo start.*/
    
    Bridge.define("PathInputDemo", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            speedMultiplier: 0,
            
            progress: 0,
            move: null,
            animator: null
        },
        ctors: {
            init: function () {
                this.speedMultiplier = 10.0;
                this.progress = 0.0;
            }
        },
        methods: {
            /*PathInputDemo.Start start.*/
            Start: function () {
                this.animator = this.GetComponent(UnityEngine.Animator);
                this.move = this.GetComponent(SWS.splineMove);
                this.move.StartMove();
                this.move.Pause();
                this.progress = 0.0;
            },
            /*PathInputDemo.Start end.*/

            /*PathInputDemo.Update start.*/
            Update: function () {
                var speed = this.speedMultiplier / 100.0;
                var duration = DG.Tweening.TweenExtensions.Duration(this.move.tween);

                //right arrow key
                if (UnityEngine.Input.GetKey(UnityEngine.KeyCode.D)) {
                    //add a value based on time and speed to the progress to start moving right
                    this.progress += UnityEngine.Time.deltaTime * 10 * speed;
                    this.progress = Math.max(0, Math.min(this.progress, duration));
                    this.move.tween.fullPosition = this.progress;
                }

                //left arrow key
                //same as above, but here we invert the progress direction
                if (UnityEngine.Input.GetKey(UnityEngine.KeyCode.A)) {
                    this.progress -= UnityEngine.Time.deltaTime * 10 * speed;
                    this.progress = Math.max(0, Math.min(this.progress, duration));
                    this.move.tween.fullPosition = this.progress;
                }

                //let Mecanim animate our object when moving,
                //otherwise set speed to zero
                if ((UnityEngine.Input.GetKey(UnityEngine.KeyCode.D) || UnityEngine.Input.GetKey(UnityEngine.KeyCode.A)) && this.progress !== 0 && this.progress !== duration) {
                    this.animator.SetFloat$1("Speed", this.move.speed);
                } else {
                    this.animator.SetFloat$1("Speed", 0.0);
                }
            },
            /*PathInputDemo.Update end.*/

            /*PathInputDemo.LateUpdate start.*/
            LateUpdate: function () {
                //if we are moving backwards, rotate our walker by 180 degrees
                //this happens after the tween has updated the transform
                if (UnityEngine.Input.GetKey(UnityEngine.KeyCode.A)) {
                    var rot = this.transform.localEulerAngles.$clone();
                    rot.y += 180;
                    this.transform.localEulerAngles = rot.$clone();
                }
            },
            /*PathInputDemo.LateUpdate end.*/


        }
    });
    /*PathInputDemo end.*/

    /*PositionWidget start.*/
    Bridge.define("PositionWidget", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            GameManager: null,
            Image: null,
            Numbers: null,
            _LastPosition: 0
        },
        ctors: {
            init: function () {
                this.Numbers = System.Array.init(0, null, UnityEngine.Sprite);
                this._LastPosition = 0;
            }
        },
        methods: {
            /*PositionWidget.Start start.*/
            Start: function () {
                Checkpoint.OnCheckpointPassed = Bridge.fn.combine(Checkpoint.OnCheckpointPassed, Bridge.fn.cacheBind(this, this.UpdateImage));
                this._LastPosition = this.GameManager.Position;
            },
            /*PositionWidget.Start end.*/

            /*PositionWidget.Update start.*/
            Update: function () {
                //Image.sprite = Numbers[GameManager.Position];
            },
            /*PositionWidget.Update end.*/

            /*PositionWidget.UpdateImage start.*/
            UpdateImage: function () {
                if (this._LastPosition === this.GameManager.Position) {
                    return;
                }

                this._LastPosition = this.GameManager.Position;
                this.Image.sprite = this.Numbers[this.GameManager.Position];
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.Image.transform, 1.5, 0.25), 0), DG.Tweening.Ease.InCubic), Bridge.fn.bind(this, function () {
                    DG.Tweening.ShortcutExtensions.DOScale(this.Image.transform, 1.0, 0.15);
                }));

            },
            /*PositionWidget.UpdateImage end.*/

            /*PositionWidget.OnDestroy start.*/
            OnDestroy: function () {
                Checkpoint.OnCheckpointPassed = Bridge.fn.remove(Checkpoint.OnCheckpointPassed, Bridge.fn.cacheBind(this, this.UpdateImage));
            },
            /*PositionWidget.OnDestroy end.*/


        }
    });
    /*PositionWidget end.*/

    /*RaceCar start.*/
    Bridge.define("RaceCar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Owner: 0,
            Score: 0,
            Wheat: 0,
            OnWheatCollected: null
        },
        ctors: {
            init: function () {
                this.Score = 0;
                this.Wheat = 0;
            }
        },
        methods: {
            /*RaceCar.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (other.gameObject.CompareTag("Wheat")) {
                    this.Wheat = (this.Wheat + 1) | 0;
                    !Bridge.staticEquals(this.OnWheatCollected, null) ? this.OnWheatCollected() : null;
                    other.gameObject.SetActive(false);
                }
            },
            /*RaceCar.OnTriggerEnter end.*/


        }
    });
    /*RaceCar end.*/

    /*RaceCar+OwnerType start.*/
    Bridge.define("RaceCar.OwnerType", {
        $kind: "nested enum",
        statics: {
            fields: {
                PLAYER: 0,
                OPPONENT: 1
            }
        }
    });
    /*RaceCar+OwnerType end.*/

    /*RapidInputDemo start.*/
    
    Bridge.define("RapidInputDemo", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            speedDisplay: null,
            
            timeDisplay: null,
            
            topSpeed: 0,
            
            addSpeed: 0,
            
            delay: 0,
            
            slowTime: 0,
            
            minPitch: 0,
            
            maxPitch: 0,
            move: null,
            currentSpeed: 0,
            timeCounter: 0
        },
        ctors: {
            init: function () {
                this.topSpeed = 15;
                this.addSpeed = 2;
                this.delay = 0.05;
                this.slowTime = 0.5;
                this.minPitch = 0;
                this.maxPitch = 2;
                this.timeCounter = 0.0;
            }
        },
        methods: {
            /*RapidInputDemo.Start start.*/
            Start: function () {
                this.move = this.GetComponent(SWS.splineMove);
                if (!UnityEngine.Object.op_Implicit(this.move)) {
                    console.warn((this.gameObject.name || "") + " missing movement script!");
                    return;
                }

                //set speed to an arbitrary small value
                //otherwise the tween can't be initialized
                this.move.speed = 0.01;
                //initialize movement but don't start it yet
                this.move.StartMove();
                this.move.Pause();
                this.move.speed = 0.0;
            },
            /*RapidInputDemo.Start end.*/

            /*RapidInputDemo.Update start.*/
            Update: function () {
                //do not continue if the tween reached its end
                if (this.move.tween == null || !DG.Tweening.TweenExtensions.IsActive(this.move.tween) || DG.Tweening.TweenExtensions.IsComplete(this.move.tween)) {
                    return;
                }

                //check for user input
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.UpArrow)) {
                    //resume tween the first time the game starts
                    if (!DG.Tweening.TweenExtensions.IsPlaying(this.move.tween)) {
                        this.move.Resume();
                    }

                    //get desired speed after pressing the button
                    //we add the desired value to the current speed for acceleration
                    var speed = this.currentSpeed + this.addSpeed;
                    //limit the speed value by the maximum value
                    if (speed >= this.topSpeed) {
                        speed = this.topSpeed;
                    }

                    //change the speed of the tween by the calculated value
                    this.move.ChangeSpeed(speed);

                    //restart slow down
                    this.StopAllCoroutines();
                    this.StartCoroutine$2("SlowDown");
                }

                //display values and increase timer
                this.speedDisplay.text = "YOUR SPEED: " + System.Single.format(Math.round(this.move.speed * 100.0) / 100.0);
                this.timeCounter += UnityEngine.Time.deltaTime;
                this.timeDisplay.text = "YOUR TIME: " + System.Single.format(Math.round(this.timeCounter * 100.0) / 100.0);
            },
            /*RapidInputDemo.Update end.*/

            /*RapidInputDemo.SlowDown start.*/
            SlowDown: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    rate,
                    speed,
                    pitchFactor,
                    pitch,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    //wait desired delay before affecting speed
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    //temp time value (0-1)
                                        t = 0.0;
                                        //time rate based on slowTime
                                        rate = 1.0 / this.slowTime;
                                        //cache actual current speed
                                        speed = this.move.speed;

                                        //slow down until slowTime is elapsed
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( t < 1 ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    //increase time value over time
                                        t += UnityEngine.Time.deltaTime * rate;
                                        //smoothly slow down speed value to zero over time
                                        //cache smoothed current speed value
                                        this.currentSpeed = pc.math.lerp(speed, 0, t);
                                        //apply current speed to the tween
                                        this.move.ChangeSpeed(this.currentSpeed);

                                        //get pitch factor as difference between min and max pitch
                                        pitchFactor = this.maxPitch - this.minPitch;
                                        //calculate pitch based on the current speed multiplied by the pitch factor
                                        pitch = this.minPitch + (this.move.speed / this.topSpeed) * pitchFactor;
                                        //smooth pitch value over 0.2 seconds and assign it to the audio clip 
                                        if (UnityEngine.Object.op_Implicit(this.GetComponent(UnityEngine.AudioSource))) {
                                            this.GetComponent(UnityEngine.AudioSource).pitch = pc.math.smoothstep(this.GetComponent(UnityEngine.AudioSource).pitch, pitch, 0.2);
                                        }

                                        //yield loop
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RapidInputDemo.SlowDown end.*/


        }
    });
    /*RapidInputDemo end.*/

    /*RotationHelper start.*/
    
    Bridge.define("RotationHelper", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            duration: 0,
            
            rotation: 0
        },
        methods: {
            /*RotationHelper.Start start.*/
            Start: function () {
                DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DORotate(this.transform, new pc.Vec3( this.rotation, 0, 0 ), this.duration, DG.Tweening.RotateMode.LocalAxisAdd), DG.Tweening.Ease.Linear), -1);
            },
            /*RotationHelper.Start end.*/


        }
    });
    /*RotationHelper end.*/

    /*RuntimeDemo start.*/
    
    Bridge.define("RuntimeDemo", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            example1: null,
            
            example2: null,
            
            example3: null,
            
            example4: null,
            
            example5: null,
            
            example6: null,
            
            example7: null
        },
        methods: {
            /*RuntimeDemo.OnGUI start.*/
            OnGUI: function () {
                this.DrawExample1();
                this.DrawExample2();
                this.DrawExample3();
                this.DrawExample4();
                this.DrawExample5();
                this.DrawExample6();
                this.DrawExample7();
            },
            /*RuntimeDemo.OnGUI end.*/

            /*RuntimeDemo.DrawExample1 start.*/
            DrawExample1: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 10, 20, 20), "1:");

                var walkerName = "Walker (Path1)";
                var pos = new pc.Vec3( -25, 0, 10 );

                //instantiation
                if (!this.example1.done && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 10, 100, 20), "Instantiate")) {
                    //instantiate walker prefab
                    var walker = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.example1.walkerPrefab, pos.$clone(), pc.Quat.IDENTITY.clone());
                    walker.name = walkerName;

                    //instantiate path prefab
                    var path = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.example1.pathPrefab, pos.$clone(), pc.Quat.IDENTITY.clone());

                    //start movement on the new path
                    walker.GetComponent(SWS.splineMove).SetPath(SWS.WaypointManager.Paths.getItem(path.name));

                    //example only
                    this.example1.done = true;
                }

                //destruction
                if (this.example1.done && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 10, 100, 20), "Destroy")) {
                    UnityEngine.MonoBehaviour.Destroy(UnityEngine.GameObject.Find(walkerName));
                    UnityEngine.MonoBehaviour.Destroy(UnityEngine.GameObject.Find(this.example1.pathPrefab.name));

                    //example only
                    this.example1.done = false;
                }
            },
            /*RuntimeDemo.DrawExample1 end.*/

            /*RuntimeDemo.DrawExample2 start.*/
            DrawExample2: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 30, 20, 20), "2:");

                //change path from path1 to path2 or vice versa
                if (UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 30, 100, 20), "Switch Path")) {
                    //get current path name
                    var currentPath = this.example2.moveRef.pathContainer.name;
                    //toggle movement to the path on the movement script
                    this.example2.moveRef.moveToPath = true;

                    //switch paths based on the name,
                    //actual path switching by calling SetPath(...)
                    if (Bridge.referenceEquals(currentPath, this.example2.pathName1)) {
                        this.example2.moveRef.SetPath(SWS.WaypointManager.Paths.getItem(this.example2.pathName2));
                    } else {
                        this.example2.moveRef.SetPath(SWS.WaypointManager.Paths.getItem(this.example2.pathName1));
                    }
                }
            },
            /*RuntimeDemo.DrawExample2 end.*/

            /*RuntimeDemo.DrawExample3 start.*/
            DrawExample3: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 50, 20, 20), "3:");

                if (this.example3.moveRef.tween == null && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 50, 100, 20), "Start")) {
                    this.example3.moveRef.StartMove();
                }

                if (this.example3.moveRef.tween != null && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 50, 100, 20), "Stop")) {
                    this.example3.moveRef.Stop();
                }

                if (this.example3.moveRef.tween != null && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 70, 100, 20), "Reset")) {
                    this.example3.moveRef.ResetToStart();
                }
            },
            /*RuntimeDemo.DrawExample3 end.*/

            /*RuntimeDemo.DrawExample4 start.*/
            DrawExample4: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 90, 20, 20), "4:");

                if (this.example4.moveRef.tween != null && DG.Tweening.TweenExtensions.IsPlaying(this.example4.moveRef.tween) && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 90, 100, 20), "Pause")) {
                    this.example4.moveRef.Pause();
                }

                if (this.example4.moveRef.tween != null && !DG.Tweening.TweenExtensions.IsPlaying(this.example4.moveRef.tween) && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 90, 100, 20), "Resume")) {
                    this.example4.moveRef.Resume();
                }
            },
            /*RuntimeDemo.DrawExample4 end.*/

            /*RuntimeDemo.DrawExample5 start.*/
            DrawExample5: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 110, 20, 20), "5:");

                if (UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 110, 100, 20), "Change Speed")) {
                    //get current speed and increase/decrease new speed
                    var currentSpeed = this.example5.moveRef.speed;
                    var newSpeed = 1.5;
                    if (currentSpeed === newSpeed) {
                        newSpeed = 4.0;
                    }

                    this.example5.moveRef.ChangeSpeed(newSpeed);
                }
            },
            /*RuntimeDemo.DrawExample5 end.*/

            /*RuntimeDemo.DrawExample6 start.*/
            DrawExample6: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 130, 20, 20), "6:");

                if (!this.example6.done && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 130, 100, 20), "Add Event")) {
                    //get receiving script
                    var receiver = this.example6.moveRef.GetComponent(EventReceiver);
                    //get event at the first waypoint to call our methods with an argument
                    var myEvent = this.example6.moveRef.events.getItem(1);
                    myEvent.RemoveAllListeners();
                    myEvent.AddListener(Bridge.fn.bind(this, function () {
                        receiver.ActivateForTime(this.example6.target);
                    }));

                    //example only
                    this.example6.done = true;
                }
            },
            /*RuntimeDemo.DrawExample6 end.*/

            /*RuntimeDemo.DrawExample7 start.*/
            DrawExample7: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 150, 20, 20), "7:");

                if (!this.example7.done && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 150, 100, 20), "Create Path")) {
                    //create path manager game object
                    var newPath = new UnityEngine.GameObject.$ctor2("Path7 (Runtime Creation)");
                    var path = newPath.AddComponent(SWS.PathManager);

                    //declare waypoint positions
                    var positions = System.Array.init([new pc.Vec3( -25, 0, -20 ), new pc.Vec3( -15, 3, -20 ), new pc.Vec3( -4, 0, -20 )], UnityEngine.Vector3);
                    var waypoints = System.Array.init(positions.length, null, UnityEngine.Transform);

                    //instantiate waypoints
                    for (var i = 0; i < positions.length; i = (i + 1) | 0) {
                        var newPoint = new UnityEngine.GameObject.$ctor2("Waypoint " + i);
                        waypoints[i] = newPoint.transform;
                        waypoints[i].position = positions[i].$clone();
                    }

                    //assign waypoints to path
                    path.Create$1(waypoints, true);

                    //optional for visibility in the build
                    newPath.AddComponent(SWS.PathRenderer);
                    newPath.GetComponent(UnityEngine.LineRenderer).material = new UnityEngine.Material.$ctor2(UnityEngine.Shader.Find("Sprites/Default"));

                    //example only
                    this.example7.done = true;
                }
            },
            /*RuntimeDemo.DrawExample7 end.*/


        }
    });
    /*RuntimeDemo end.*/

    /*RuntimeDemo+ExampleClass1 start.*/
    Bridge.define("RuntimeDemo.ExampleClass1", {
        $kind: "nested class",
        fields: {
            walkerPrefab: null,
            pathPrefab: null,
            done: false
        },
        ctors: {
            init: function () {
                this.done = false;
            }
        }
    });
    /*RuntimeDemo+ExampleClass1 end.*/

    /*RuntimeDemo+ExampleClass2 start.*/
    Bridge.define("RuntimeDemo.ExampleClass2", {
        $kind: "nested class",
        fields: {
            moveRef: null,
            pathName1: null,
            pathName2: null
        }
    });
    /*RuntimeDemo+ExampleClass2 end.*/

    /*RuntimeDemo+ExampleClass3 start.*/
    Bridge.define("RuntimeDemo.ExampleClass3", {
        $kind: "nested class",
        fields: {
            moveRef: null
        }
    });
    /*RuntimeDemo+ExampleClass3 end.*/

    /*RuntimeDemo+ExampleClass4 start.*/
    Bridge.define("RuntimeDemo.ExampleClass4", {
        $kind: "nested class",
        fields: {
            moveRef: null
        }
    });
    /*RuntimeDemo+ExampleClass4 end.*/

    /*RuntimeDemo+ExampleClass5 start.*/
    Bridge.define("RuntimeDemo.ExampleClass5", {
        $kind: "nested class",
        fields: {
            moveRef: null
        }
    });
    /*RuntimeDemo+ExampleClass5 end.*/

    /*RuntimeDemo+ExampleClass6 start.*/
    Bridge.define("RuntimeDemo.ExampleClass6", {
        $kind: "nested class",
        fields: {
            moveRef: null,
            target: null,
            done: false
        },
        ctors: {
            init: function () {
                this.done = false;
            }
        }
    });
    /*RuntimeDemo+ExampleClass6 end.*/

    /*RuntimeDemo+ExampleClass7 start.*/
    Bridge.define("RuntimeDemo.ExampleClass7", {
        $kind: "nested class",
        fields: {
            done: false
        },
        ctors: {
            init: function () {
                this.done = false;
            }
        }
    });
    /*RuntimeDemo+ExampleClass7 end.*/

    /*SpeedType start.*/
    Bridge.define("SpeedType", {
        $kind: "enum",
        statics: {
            fields: {
                MPH: 0,
                KPH: 1
            }
        }
    });
    /*SpeedType end.*/

    /*SWS.PathManager start.*/
    
    Bridge.define("SWS.PathManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            waypoints: null,
            
            drawCurved: false,
            
            drawDirection: false,
            
            color1: null,
            
            color2: null,
            
            size: null,
            
            radius: 0,
            /**
             * Skip custom names on waypoint renaming.
             *
             * @instance
             * @public
             * @memberof SWS.PathManager
             * @default true
             * @type boolean
             */
            skipCustomNames: false,
            
            replaceObject: null
        },
        ctors: {
            init: function () {
                this.color1 = new UnityEngine.Color();
                this.color2 = new UnityEngine.Color();
                this.size = new UnityEngine.Vector3();
                this.waypoints = System.Array.init([], UnityEngine.Transform);
                this.drawCurved = true;
                this.drawDirection = false;
                this.color1 = new pc.Color( 1, 0, 1, 0.5 );
                this.color2 = new pc.Color( 1, 0.921568632, 0.0156862754, 0.5 );
                this.size = new pc.Vec3( 0.7, 0.7, 0.7 );
                this.radius = 0.4;
                this.skipCustomNames = true;
            }
        },
        methods: {
            /*SWS.PathManager.Awake start.*/
            Awake: function () {
                SWS.WaypointManager.AddPath(this.gameObject);
            },
            /*SWS.PathManager.Awake end.*/

            /*SWS.PathManager.Create start.*/
            /**
             * Create or update waypoint representation from child objects or external parent.
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @param   {UnityEngine.Transform}    parent
             * @return  {void}
             */
            Create: function (parent) {
                var $t;
                if (parent === void 0) { parent = null; }
                if (UnityEngine.Component.op_Equality(parent, null)) {
                    parent = this.transform;
                }

                var childs = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                $t = Bridge.getEnumerator(parent);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        childs.add(child);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.Create$1(childs.ToArray());
            },
            /*SWS.PathManager.Create end.*/

            /*SWS.PathManager.Create$1 start.*/
            /**
             * Create or update waypoint representation from the array passed in, optionally parenting them to the path.
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @param   {Array.<UnityEngine.Transform>}    waypoints       
             * @param   {boolean}                          makeChildren
             * @return  {void}
             */
            Create$1: function (waypoints, makeChildren) {
                if (makeChildren === void 0) { makeChildren = false; }
                if (waypoints.length < 2) {
                    console.warn("Not enough waypoints placed - minimum is 2. Cancelling.");
                    return;
                }

                if (makeChildren) {
                    for (var i = 0; i < waypoints.length; i = (i + 1) | 0) {
                        waypoints[i].parent = this.transform;
                    }
                }

                this.waypoints = waypoints;
            },
            /*SWS.PathManager.Create$1 end.*/

            /*SWS.PathManager.OnDrawGizmos start.*/
            OnDrawGizmos: function () {
                if (this.waypoints.length <= 0) {
                    return;
                }

                //get positions
                var wpPositions = this.GetPathPoints();

                //assign path ends color
                var start = wpPositions[0].$clone();
                var end = wpPositions[((wpPositions.length - 1) | 0)].$clone();
                UnityEngine.Gizmos.color = this.color1.$clone();
                UnityEngine.Gizmos.DrawWireCube(start.$clone(), this.size.$clone().scale( this.GetHandleSize(start.$clone()) ).scale( 1.5 ));
                UnityEngine.Gizmos.DrawWireCube(end.$clone(), this.size.$clone().scale( this.GetHandleSize(end.$clone()) ).scale( 1.5 ));

                //assign line and waypoints color
                UnityEngine.Gizmos.color = this.color2.$clone();
                for (var i = 1; i < ((wpPositions.length - 1) | 0); i = (i + 1) | 0) {
                    UnityEngine.Gizmos.DrawWireSphere(wpPositions[i].$clone(), this.radius * this.GetHandleSize(wpPositions[i].$clone()));
                }

                //draw linear or curved lines with the same color
                if (this.drawCurved && wpPositions.length >= 2) {
                    SWS.WaypointManager.DrawCurved(wpPositions);
                } else {
                    SWS.WaypointManager.DrawStraight(wpPositions);
                }
            },
            /*SWS.PathManager.OnDrawGizmos end.*/

            /*SWS.PathManager.GetHandleSize start.*/
            GetHandleSize: function (pos) {
                var handleSize = 1.0;
                return handleSize;
            },
            /*SWS.PathManager.GetHandleSize end.*/

            /*SWS.PathManager.GetPathPoints start.*/
            
            GetPathPoints: function (local) {
                if (local === void 0) { local = false; }
                var pathPoints = System.Array.init(this.waypoints.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);

                if (local) {
                    for (var i = 0; i < this.waypoints.length; i = (i + 1) | 0) {
                        pathPoints[i] = this.waypoints[i].localPosition.$clone();
                    }
                } else {
                    for (var i1 = 0; i1 < this.waypoints.length; i1 = (i1 + 1) | 0) {
                        pathPoints[i1] = this.waypoints[i1].position.$clone();
                    }
                }

                return pathPoints;
            },
            /*SWS.PathManager.GetPathPoints end.*/

            /*SWS.PathManager.GetWaypoint start.*/
            /**
             * Returns this waypoint transform according to the index passed in.
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @param   {number}                   index
             * @return  {UnityEngine.Transform}
             */
            GetWaypoint: function (index) {
                return this.waypoints[index];
            },
            /*SWS.PathManager.GetWaypoint end.*/

            /*SWS.PathManager.GetWaypointIndex start.*/
            /**
             * Converts bezier point on the path to waypoint index.
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @param   {number}    pathPoint
             * @return  {number}
             */
            GetWaypointIndex: function (pathPoint) {
                return pathPoint;
            },
            /*SWS.PathManager.GetWaypointIndex end.*/

            /*SWS.PathManager.GetPathPointIndex start.*/
            /**
             * Converts waypoint index to bezier point on the path.
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @param   {number}    waypoint
             * @return  {number}
             */
            GetPathPointIndex: function (waypoint) {
                return waypoint;
            },
            /*SWS.PathManager.GetPathPointIndex end.*/

            /*SWS.PathManager.GetWaypointCount start.*/
            /**
             * Returns waypoint length (should be equal to events count).
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @return  {number}
             */
            GetWaypointCount: function () {
                return this.waypoints.length;
            },
            /*SWS.PathManager.GetWaypointCount end.*/


        },
        overloads: {
            "Create(Transform[], bool)": "Create$1"
        }
    });
    /*SWS.PathManager end.*/

    /*SWS.BezierPoint start.*/
    
    Bridge.define("SWS.BezierPoint", {
        fields: {
            
            wp: null,
            
            cp: null
        },
        ctors: {
            init: function () {
                this.cp = System.Array.init(2, null, UnityEngine.Transform);
            }
        }
    });
    /*SWS.BezierPoint end.*/

    /*SWS.EventCollisionTrigger start.*/
    
    Bridge.define("SWS.EventCollisionTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            /**
             * Checkbox to toggle actions on trigger.
             *
             * @instance
             * @public
             * @memberof SWS.EventCollisionTrigger
             * @default true
             * @type boolean
             */
            onTrigger: false,
            /**
             * Checkbox to toggle actions on collision.
             *
             * @instance
             * @public
             * @memberof SWS.EventCollisionTrigger
             * @default true
             * @type boolean
             */
            onCollision: false,
            
            myEvent: null
        },
        ctors: {
            init: function () {
                this.onTrigger = true;
                this.onCollision = true;
            }
        },
        methods: {
            /*SWS.EventCollisionTrigger.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (!this.onTrigger) {
                    return;
                }

                //do something here directly,
                //or assign event methods in the inspector

                this.myEvent.Invoke();
            },
            /*SWS.EventCollisionTrigger.OnTriggerEnter end.*/

            /*SWS.EventCollisionTrigger.OnCollisionEnter start.*/
            OnCollisionEnter: function (other) {
                if (!this.onCollision) {
                    return;
                }

                //do something here directly,
                //or assign event methods in the inspector

                this.myEvent.Invoke();
            },
            /*SWS.EventCollisionTrigger.OnCollisionEnter end.*/

            /*SWS.EventCollisionTrigger.ApplyForce start.*/
            /**
             * Applies an explosion force to the colliding object.
             *
             * @instance
             * @public
             * @this SWS.EventCollisionTrigger
             * @memberof SWS.EventCollisionTrigger
             * @param   {number}    power
             * @return  {void}
             */
            ApplyForce: function (power) {
                var $t;
                var position = this.transform.position.$clone();
                var radius = 5.0;

                var colliders = UnityEngine.Physics.OverlapSphere(position, radius);
                $t = Bridge.getEnumerator(colliders);
                try {
                    while ($t.moveNext()) {
                        var hit = $t.Current;
                        /* navMove move = hit.GetComponent<navMove>();
                        if (move != null)
                        {
                           move.Stop();
                           hit.GetComponent<NavMeshAgent>().enabled = false;
                           hit.isTrigger = false;
                        }*/

                        var rb = hit.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rb, null)) {
                            rb.AddExplosionForce(power, position, radius, 100.0);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*SWS.EventCollisionTrigger.ApplyForce end.*/


        }
    });
    /*SWS.EventCollisionTrigger end.*/

    /*SWS.MoveAnimator start.*/
    
    Bridge.define("SWS.MoveAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            sMove: null,
            animator: null,
            lastRotY: 0
        },
        methods: {
            /*SWS.MoveAnimator.Start start.*/
            Start: function () {
                this.animator = this.GetComponentInChildren(UnityEngine.Animator);

                this.sMove = this.GetComponent(SWS.splineMove);
                //if (!sMove)
                //nAgent = GetComponent<NavMeshAgent>();

            },
            /*SWS.MoveAnimator.Start end.*/

            /*SWS.MoveAnimator.OnAnimatorMove start.*/
            OnAnimatorMove: function () {
                //init variables
                var speed = 0.0;
                var angle = 0.0;

                //calculate variables based on movement script:
                //for splineMove and bezierMove, speed and rotation are regulated by the tween.
                //here we just get the tween's speed and calculate the rotation difference to the last frame.
                //navmesh agents have their own type of movement which has to be calculated separately.
                if (UnityEngine.Object.op_Implicit(this.sMove)) {
                    speed = (this.sMove.tween == null || !DG.Tweening.TweenExtensions.IsActive(this.sMove.tween) || !DG.Tweening.TweenExtensions.IsPlaying(this.sMove.tween)) ? 0.0 : this.sMove.speed;
                    angle = (this.transform.eulerAngles.y - this.lastRotY) * 10;
                    this.lastRotY = this.transform.eulerAngles.y;
                } else {
                    //speed = nAgent.velocity.magnitude;
                    //Vector3 velocity = Quaternion.Inverse(transform.rotation) * nAgent.desiredVelocity;
                    //angle = Mathf.Atan2(velocity.x, velocity.z) * 180.0f / 3.14159f;
                }

                //push variables to the animator with some optional damping
                this.animator.SetFloat$1("Speed", speed);
                this.animator.SetFloat$2("Direction", angle, 0.15, UnityEngine.Time.deltaTime);
            },
            /*SWS.MoveAnimator.OnAnimatorMove end.*/


        }
    });
    /*SWS.MoveAnimator end.*/

    /*SWS.PathIndicator start.*/
    
    Bridge.define("SWS.PathIndicator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            modRotation: 0,
            pSys: null
        },
        ctors: {
            init: function () {
                this.modRotation = 0;
            }
        },
        methods: {
            /*SWS.PathIndicator.Start start.*/
            Start: function () {
                this.pSys = this.GetComponentInChildren(UnityEngine.ParticleSystem);
                this.StartCoroutine$2("EmitParticles");
            },
            /*SWS.PathIndicator.Start end.*/

            /*SWS.PathIndicator.EmitParticles start.*/
            EmitParticles: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rot,
                    pMain,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    //wait movement script to be ready
                                        $enumerator.current = new UnityEngine.WaitForEndOfFrame();
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    //start loop
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( true ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    //set particle rotation
                                        rot = (this.transform.eulerAngles.y + this.modRotation) * UnityEngine.Mathf.Deg2Rad;
                                        pMain = this.pSys.main;
                                        pMain.startRotation = new pc.MinMaxCurve( rot );

                                        //emit one particle
                                        this.pSys.Emit(1);
                                        //wait before emitting another one
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SWS.PathIndicator.EmitParticles end.*/


        }
    });
    /*SWS.PathIndicator end.*/

    /*SWS.PathRenderer start.*/
    
    Bridge.define("SWS.PathRenderer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            onUpdate: false,
            
            spacing: 0,
            path: null,
            line: null,
            points: null
        },
        ctors: {
            init: function () {
                this.onUpdate = false;
                this.spacing = 0.05;
            }
        },
        methods: {
            /*SWS.PathRenderer.Start start.*/
            Start: function () {
                this.line = this.GetComponent(UnityEngine.LineRenderer);
                this.path = this.GetComponent(SWS.PathManager);
                if (UnityEngine.Object.op_Implicit(this.path)) {
                    this.StartCoroutine$2("StartRenderer");
                }
            },
            /*SWS.PathRenderer.Start end.*/

            /*SWS.PathRenderer.StartRenderer start.*/
            StartRenderer: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.Render();

                                        if (this.onUpdate) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 1: {
                                    if ( true ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.Render();

                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    $step = 5;
                                    continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SWS.PathRenderer.StartRenderer end.*/

            /*SWS.PathRenderer.Render start.*/
            Render: function () {
                //avoid freeze in while loop with spacing set to zero
                this.spacing = Math.max(0, Math.min(1, this.spacing));
                if (this.spacing === 0) {
                    this.spacing = 0.05;
                }

                //get path points of the path component
                var list = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                list.AddRange(this.path.GetPathPoints());

                //differ between linear and curved paths
                if (this.path.drawCurved) {
                    //on curved paths, the first and last waypoint
                    //has to exist twice due to tween library calculations
                    list.insert(0, list.getItem(0).$clone());
                    list.add(list.getItem(((list.Count - 1) | 0)).$clone());
                    this.points = list.ToArray();
                    this.DrawCurved();
                } else {
                    this.points = list.ToArray();
                    this.DrawLinear();
                }
            },
            /*SWS.PathRenderer.Render end.*/

            /*SWS.PathRenderer.DrawCurved start.*/
            DrawCurved: function () {
                //set initial LineRenderer size based on spacing
                var size = (Math.round(1.0 / this.spacing) + 1) | 0;
                this.line.positionCount = size;
                var t = 0.0;
                var i = 0;

                //loop over positions and set calculated path point
                while (i < size) {
                    this.line.SetPosition(i, SWS.WaypointManager.GetPoint(this.points, t));
                    t += this.spacing;
                    i = (i + 1) | 0;
                }
            },
            /*SWS.PathRenderer.DrawCurved end.*/

            /*SWS.PathRenderer.DrawLinear start.*/
            DrawLinear: function () {
                //set initial size based on waypoint count
                this.line.positionCount = this.points.length;
                var t = 0.0;
                var i = 0;

                //loop over positions and set waypoint position
                while (i < this.points.length) {
                    this.line.SetPosition(i, this.points[i].$clone());
                    t += this.spacing;
                    i = (i + 1) | 0;
                }
            },
            /*SWS.PathRenderer.DrawLinear end.*/


        }
    });
    /*SWS.PathRenderer end.*/

    /*SWS.splineMove start.*/
    
    Bridge.define("SWS.splineMove", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            pathContainer: null,
            
            onStart: false,
            
            moveToPath: false,
            
            reverse: false,
            
            startPoint: 0,
            
            currentPoint: 0,
            
            closeLoop: false,
            
            localType: 0,
            
            lookAhead: 0,
            
            sizeToAdd: 0,
            
            timeValue: 0,
            
            speed: 0,
            
            animEaseType: null,
            
            loopType: 0,
            
            waypoints: null,
            
            events: null,
            
            pathType: 0,
            
            pathMode: 0,
            
            easeType: 0,
            
            lockPosition: 0,
            
            lockRotation: 0,
            /**
             * Whether to lerp this target from one waypoint rotation to the next,
             effectively overwriting the pathMode setting for all or one axis only.
             *
             * @instance
             * @public
             * @memberof SWS.splineMove
             * @type number
             */
            waypointRotation: 0,
            /**
             * The target transform to rotate using waypoint rotation, if selected.
             This should be a child object with (0,0,0) rotation that gets overridden.
             *
             * @instance
             * @public
             * @memberof SWS.splineMove
             * @type UnityEngine.Transform
             */
            rotationTarget: null,
            tween: null,
            wpPos: null,
            originSpeed: 0,
            originRot: null,
            rand: null,
            rndArray: null,
            waitRoutine: null
        },
        ctors: {
            init: function () {
                this.originRot = new UnityEngine.Quaternion();
                this.onStart = false;
                this.moveToPath = false;
                this.reverse = false;
                this.startPoint = 0;
                this.currentPoint = 0;
                this.closeLoop = false;
                this.localType = SWS.splineMove.LocalType.none;
                this.lookAhead = 0;
                this.sizeToAdd = 0;
                this.timeValue = SWS.splineMove.TimeValue.speed;
                this.speed = 5;
                this.loopType = SWS.splineMove.LoopType.none;
                this.events = new (System.Collections.Generic.List$1(UnityEngine.Events.UnityEvent)).ctor();
                this.pathType = DG.Tweening.PathType.CatmullRom;
                this.pathMode = DG.Tweening.PathMode.Full3D;
                this.easeType = DG.Tweening.Ease.Linear;
                this.lockPosition = DG.Tweening.AxisConstraint.None;
                this.lockRotation = DG.Tweening.AxisConstraint.None;
                this.waypointRotation = SWS.splineMove.RotationType.none;
                this.rand = new System.Random.ctor();
            }
        },
        methods: {
            /*SWS.splineMove.Start start.*/
            Start: function () {
                if (this.onStart) {
                    this.StartMove();
                }
            },
            /*SWS.splineMove.Start end.*/

            /*SWS.splineMove.StartMove start.*/
            
            StartMove: function () {
                //don't continue without path container
                if (UnityEngine.MonoBehaviour.op_Equality(this.pathContainer, null)) {
                    console.warn((this.gameObject.name || "") + " has no path! Please set Path Container.");
                    return;
                }

                //get array with waypoint positions
                this.waypoints = this.pathContainer.GetPathPoints(this.localType !== SWS.splineMove.LocalType.none);
                //cache original speed for future speed changes
                this.originSpeed = this.speed;
                //cache original rotation if waypoint rotation is enabled
                this.originRot = this.transform.rotation.$clone();

                //initialize waypoint positions
                this.startPoint = Math.max(0, Math.min(this.startPoint, ((this.waypoints.length - 1) | 0)));
                var index = this.startPoint;
                if (this.reverse) {
                    System.Array.reverse(this.waypoints);
                    index = (((this.waypoints.length - 1) | 0) - index) | 0;
                }
                this.Initialize(index);

                this.Stop();
                this.CreateTween();
            },
            /*SWS.splineMove.StartMove end.*/

            /*SWS.splineMove.Initialize start.*/
            Initialize: function (startAt) {
                if (startAt === void 0) { startAt = 0; }
                if (!this.moveToPath) {
                    startAt = 0;
                }
                this.wpPos = System.Array.init(((this.waypoints.length - startAt) | 0), function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                for (var i = 0; i < this.wpPos.length; i = (i + 1) | 0) {
                    this.wpPos[i] = this.waypoints[((i + startAt) | 0)].$clone().add( new pc.Vec3( 0, this.sizeToAdd, 0 ) );
                }

                //position waypoints relative to object
                if (this.localType === SWS.splineMove.LocalType.toObject) {
                    for (var i1 = 0; i1 < this.wpPos.length; i1 = (i1 + 1) | 0) {
                        this.wpPos[i1] = this.transform.position.$clone().add( this.wpPos[i1] );
                    }
                }

                //message count is smaller than waypoint count,
                //add empty message per waypoint
                for (var i2 = this.events.Count; i2 <= ((this.pathContainer.GetWaypointCount() - 1) | 0); i2 = (i2 + 1) | 0) {
                    this.events.add(new UnityEngine.Events.UnityEvent());
                }
            },
            /*SWS.splineMove.Initialize end.*/

            /*SWS.splineMove.CreateTween start.*/
            CreateTween: function () {
                //prepare DOTween's parameters, you can look them up here
                //http://dotween.demigiant.com/documentation.php

                var parms = new DG.Tweening.TweenParams();

                parms.SetUpdate(DG.Tweening.UpdateType.Normal);

                //differ between speed or time based tweening
                if (this.timeValue === SWS.splineMove.TimeValue.speed) {
                    parms.SetSpeedBased();
                }
                if (this.loopType === SWS.splineMove.LoopType.yoyo) {
                    parms.SetLoops(-1, DG.Tweening.LoopType.Yoyo);
                }

                //apply ease type or animation curve
                if (this.easeType === DG.Tweening.Ease.Unset) {
                    parms.SetEase$2(this.animEaseType);
                } else {
                    parms.SetEase(this.easeType);
                }

                if (this.moveToPath) {
                    parms.OnWaypointChange(Bridge.fn.cacheBind(this, this.OnWaypointReached));
                } else {
                    //on looptype random initialize random order of waypoints
                    if (this.loopType === SWS.splineMove.LoopType.random) {
                        this.RandomizeWaypoints();
                    } else {
                        if (this.loopType === SWS.splineMove.LoopType.yoyo) {
                            parms.OnStepComplete(Bridge.fn.cacheBind(this, this.ReachedEnd));
                        }
                    }

                    var startPos = this.wpPos[0].$clone();
                    if (this.localType === SWS.splineMove.LocalType.toPath) {
                        startPos = this.pathContainer.transform.TransformPoint$1(startPos);
                    }
                    this.transform.position = startPos.$clone();

                    parms.OnWaypointChange(Bridge.fn.cacheBind(this, this.OnWaypointChange));
                    parms.OnComplete(Bridge.fn.cacheBind(this, this.ReachedEnd));
                }

                if (this.pathMode === DG.Tweening.PathMode.Ignore && this.waypointRotation !== SWS.splineMove.RotationType.none) {
                    if (UnityEngine.Component.op_Equality(this.rotationTarget, null)) {
                        this.rotationTarget = this.transform;
                    }
                    parms.OnUpdate(Bridge.fn.cacheBind(this, this.OnWaypointRotation));
                }

                if (this.localType === SWS.splineMove.LocalType.toPath) {
                    this.tween = DG.Tweening.TweenSettingsExtensions.SetLookAt$1(DG.Tweening.TweenSettingsExtensions.SetOptions$1(DG.Tweening.TweenSettingsExtensions.SetAs$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.ShortcutExtensions.DOLocalPath$1(this.transform, this.wpPos, this.originSpeed, this.pathType, this.pathMode), parms), this.closeLoop, this.lockPosition, this.lockRotation), this.lookAhead);
                } else {
                    this.tween = DG.Tweening.TweenSettingsExtensions.SetLookAt$1(DG.Tweening.TweenSettingsExtensions.SetOptions$1(DG.Tweening.TweenSettingsExtensions.SetAs$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.ShortcutExtensions.DOPath$1(this.transform, this.wpPos, this.originSpeed, this.pathType, this.pathMode), parms), this.closeLoop, this.lockPosition, this.lockRotation), this.lookAhead);
                }

                if (!this.moveToPath && this.startPoint > 0) {
                    this.GoToWaypoint(this.startPoint);
                    this.startPoint = 0;
                }

                //continue new tween with adjusted speed if it was changed before
                if (this.originSpeed !== this.speed) {
                    this.ChangeSpeed(this.speed);
                }
            },
            /*SWS.splineMove.CreateTween end.*/

            /*SWS.splineMove.OnWaypointReached start.*/
            OnWaypointReached: function (index) {
                if (index <= 0) {
                    return;
                }

                this.Stop();
                this.moveToPath = false;
                this.Initialize();
                this.CreateTween();
            },
            /*SWS.splineMove.OnWaypointReached end.*/

            /*SWS.splineMove.OnWaypointChange start.*/
            OnWaypointChange: function (index) {
                index = this.pathContainer.GetWaypointIndex(index);

                if (index === -1) {
                    return;
                }
                if (this.loopType !== SWS.splineMove.LoopType.yoyo && this.reverse) {
                    index = (((this.pathContainer.GetWaypointCount() - 1) | 0) - index) | 0;
                }
                if (this.loopType === SWS.splineMove.LoopType.random) {
                    index = this.rndArray[index];
                }

                this.currentPoint = index;

                if (this.events == null || ((this.events.Count - 1) | 0) < index || this.events.getItem(index) == null || this.loopType === SWS.splineMove.LoopType.random && index === this.rndArray[((this.rndArray.length - 1) | 0)]) {
                    return;
                }

                //work around internal DOTween thing firing all previous OnWaypointChange events too,
                //when the startPoint > 0 and index changes multiple times at once
                if (this.startPoint > 0 && this.pathContainer.GetWaypointIndex(this.startPoint) !== index) {
                    return;
                }

                this.events.getItem(index).Invoke();
            },
            /*SWS.splineMove.OnWaypointChange end.*/

            /*SWS.splineMove.OnWaypointRotation start.*/
            OnWaypointRotation: function () {
                var $t, $t1, $t2, $t3, $t4, $t5, $t6;
                var lookPoint = this.currentPoint;
                lookPoint = Math.max(0, Math.min(this.pathContainer.GetWaypointIndex(this.currentPoint), this.pathContainer.GetWaypointCount()));

                if (!DG.Tweening.TweenExtensions.IsInitialized(this.tween) || DG.Tweening.TweenExtensions.IsComplete(this.tween)) {
                    this.ApplyWaypointRotation(this.pathContainer.GetWaypoint(lookPoint).rotation.$clone());
                    return;
                }

                var tweenPath = Bridge.as(this.tween, DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions));
                var currentDist = DG.Tweening.TweenExtensions.PathLength(tweenPath) * DG.Tweening.TweenExtensions.ElapsedPercentage(tweenPath);
                var pathLength = 0.0;
                var currentPerc = 0.0;
                var targetPoint = this.currentPoint;

                if (this.moveToPath) {
                    pathLength = ($t = tweenPath.changeValue.wpLengths)[1];
                    currentPerc = currentDist / pathLength;
                    this.ApplyWaypointRotation(new pc.Quat().slerp( this.originRot, this.pathContainer.GetWaypoint(this.currentPoint).rotation, currentPerc ));
                    return;
                }

                if (Bridge.is(this.pathContainer, SWS.BezierPathManager)) {
                    var bPath = Bridge.as(this.pathContainer, SWS.BezierPathManager);
                    var curPoint = this.currentPoint;

                    if (this.reverse) {
                        targetPoint = (((bPath.GetWaypointCount() - 2) | 0) - (((((this.waypoints.length - this.currentPoint) | 0) - 1) | 0))) | 0;
                        curPoint = ((((bPath.bPoints.Count - 2) | 0)) - targetPoint) | 0;
                    }

                    var prevPoints = Bridge.Int.clip32(curPoint * bPath.pathDetail * 10);

                    if (bPath.customDetail) {
                        prevPoints = 0;
                        for (var i = 0; i < targetPoint; i = (i + 1) | 0) {
                            prevPoints = (prevPoints + (Bridge.Int.clip32(bPath.segmentDetail.getItem(i) * 10))) | 0;
                        }
                    }

                    if (this.reverse) {
                        for (var i1 = 0; i1 <= Bridge.Int.mul(curPoint, 10); i1 = (i1 + 1) | 0) {
                            currentDist -= ($t1 = tweenPath.changeValue.wpLengths)[i1];
                        }
                    } else {
                        for (var i2 = 0; i2 <= prevPoints; i2 = (i2 + 1) | 0) {
                            currentDist -= ($t2 = tweenPath.changeValue.wpLengths)[i2];
                        }
                    }

                    if (bPath.customDetail) {
                        for (var i3 = (prevPoints + 1) | 0; i3 <= prevPoints + bPath.segmentDetail.getItem(this.currentPoint) * 10; i3 = (i3 + 1) | 0) {
                            pathLength += ($t3 = tweenPath.changeValue.wpLengths)[i3];
                        }
                    } else {
                        for (var i4 = (prevPoints + 1) | 0; i4 <= ((prevPoints + 10) | 0); i4 = (i4 + 1) | 0) {
                            pathLength += ($t4 = tweenPath.changeValue.wpLengths)[i4];
                        }
                    }
                } else {
                    if (this.reverse) {
                        targetPoint = (((this.waypoints.length - this.currentPoint) | 0) - 1) | 0;
                    }

                    for (var i5 = 0; i5 <= targetPoint; i5 = (i5 + 1) | 0) {
                        currentDist -= ($t5 = tweenPath.changeValue.wpLengths)[i5];
                    }

                    pathLength = ($t6 = tweenPath.changeValue.wpLengths)[((targetPoint + 1) | 0)];
                }

                currentPerc = currentDist / pathLength;
                if (Bridge.is(this.pathContainer, SWS.BezierPathManager)) {
                    lookPoint = targetPoint;
                    if (this.reverse) {
                        lookPoint = (lookPoint + 1) | 0;
                    }
                }

                currentPerc = Math.max(0, Math.min(1, currentPerc));
                this.ApplyWaypointRotation(new pc.Quat().slerp( this.pathContainer.GetWaypoint(lookPoint).rotation, this.pathContainer.GetWaypoint(this.reverse ? ((lookPoint - 1) | 0) : ((lookPoint + 1) | 0)).rotation, currentPerc ));
            },
            /*SWS.splineMove.OnWaypointRotation end.*/

            /*SWS.splineMove.ApplyWaypointRotation start.*/
            ApplyWaypointRotation: function (rotation) {
                this.rotationTarget.rotation = rotation.$clone();

                //limit rotation to specific axis
                //IN DEVELOPMENT
                /* 
                        switch (waypointRotation)
                        {
                				case RotationType.all:
                					rotationTarget.rotation = rotation;
                                break;
                				case RotationType.x:
                					rotationTarget.localEulerAngles = rotation.eulerAngles.x * transform.right * -1;
                                break;
                            case RotationType.y:
                                rotationTarget.localEulerAngles = rotation.eulerAngles.y * transform.up;
                                break;
                            case RotationType.z:
                                rotationTarget.localEulerAngles = rotation.eulerAngles.z * transform.forward * -1;
                                break;
                        }
                */
            },
            /*SWS.splineMove.ApplyWaypointRotation end.*/

            /*SWS.splineMove.ReachedEnd start.*/
            ReachedEnd: function () {
                //each looptype has specific properties
                switch (this.loopType) {
                    case SWS.splineMove.LoopType.none: 
                        this.tween = null;
                        return;
                    case SWS.splineMove.LoopType.loop: 
                        this.currentPoint = 0;
                        this.CreateTween();
                        break;
                    case SWS.splineMove.LoopType.pingPong: 
                        this.reverse = !this.reverse;
                        System.Array.reverse(this.waypoints);
                        this.Initialize();
                        this.CreateTween();
                        break;
                    case SWS.splineMove.LoopType.yoyo: 
                        this.reverse = !this.reverse;
                        break;
                    case SWS.splineMove.LoopType.random: 
                        this.RandomizeWaypoints();
                        this.CreateTween();
                        break;
                }
            },
            /*SWS.splineMove.ReachedEnd end.*/

            /*SWS.splineMove.RandomizeWaypoints start.*/
            RandomizeWaypoints: function () {
                this.Initialize();
                //create array with ongoing index numbers to keep them in mind,
                //this gets shuffled with all waypoint positions at the next step 
                this.rndArray = System.Array.init(this.wpPos.length, 0, System.Int32);
                for (var i = 0; i < this.rndArray.length; i = (i + 1) | 0) {
                    this.rndArray[i] = i;
                }

                //get total array length
                var n = this.wpPos.length;
                //shuffle wpPos and rndArray
                while (n > 1) {
                    var k = this.rand.Next$1(Bridge.identity(n, ((n = (n - 1) | 0))));
                    var temp = this.wpPos[n].$clone();
                    this.wpPos[n] = this.wpPos[k].$clone();
                    this.wpPos[k] = temp.$clone();

                    var tmpI = this.rndArray[n];
                    this.rndArray[n] = this.rndArray[k];
                    this.rndArray[k] = tmpI;
                }

                //since all waypoints are shuffled the first waypoint does not
                //correspond with the actual current position, so we have to
                //swap the first waypoint with the actual waypoint.
                //start by caching the first waypoint position and number
                var first = this.wpPos[0].$clone();
                var rndFirst = this.rndArray[0];
                //loop through wpPos array and find corresponding waypoint
                for (var i1 = 0; i1 < this.wpPos.length; i1 = (i1 + 1) | 0) {
                    //currentPoint is equal to this waypoint number
                    if (this.rndArray[i1] === this.currentPoint) {
                        //swap rnd index number and waypoint positions
                        this.rndArray[i1] = rndFirst;
                        this.wpPos[0] = this.wpPos[i1].$clone();
                        this.wpPos[i1] = first.$clone();
                    }
                }
                //set current rnd index number to the actual current point
                this.rndArray[0] = this.currentPoint;
            },
            /*SWS.splineMove.RandomizeWaypoints end.*/

            /*SWS.splineMove.GoToWaypoint start.*/
            /**
             * Teleports to the defined waypoint index on the path.
             *
             * @instance
             * @public
             * @this SWS.splineMove
             * @memberof SWS.splineMove
             * @param   {number}    index
             * @return  {void}
             */
            GoToWaypoint: function (index) {
                if (this.tween == null) {
                    return;
                }

                if (this.reverse) {
                    index = (((this.waypoints.length - 1) | 0) - index) | 0;
                }

                DG.Tweening.TweenExtensions.ForceInit(this.tween);
                DG.Tweening.TweenExtensions.GotoWaypoint(this.tween, index, true);
            },
            /*SWS.splineMove.GoToWaypoint end.*/

            /*SWS.splineMove.Pause start.*/
            
            Pause: function (seconds) {
                if (seconds === void 0) { seconds = 0.0; }
                if (this.waitRoutine != null) {
                    this.StopCoroutine$2(this.waitRoutine);
                }
                if (this.tween != null) {
                    DG.Tweening.TweenExtensions.Pause(DG.Tweening.Tweener, this.tween);
                }

                if (seconds > 0) {
                    this.waitRoutine = this.StartCoroutine$1(this.Wait(seconds));
                }
            },
            /*SWS.splineMove.Pause end.*/

            /*SWS.splineMove.Wait start.*/
            Wait: function (secs) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (secs === void 0) { secs = 0.0; }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(secs);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Resume();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SWS.splineMove.Wait end.*/

            /*SWS.splineMove.Resume start.*/
            
            Resume: function () {
                if (this.waitRoutine != null) {
                    this.StopCoroutine$2(this.waitRoutine);
                    this.waitRoutine = null;
                }

                if (this.tween != null) {
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Tweener, this.tween);
                }
            },
            /*SWS.splineMove.Resume end.*/

            /*SWS.splineMove.Reverse start.*/
            
            Reverse: function () {
                //inverse direction toggle
                this.reverse = !this.reverse;
                //calculate opposite remaining path time i.e. if we're at 80% progress in one direction,
                //this then returns 20% time value when starting from the opposite direction and so on
                var timeRemaining = 0.0;
                if (this.tween != null) {
                    timeRemaining = 1 - DG.Tweening.TweenExtensions.ElapsedPercentage(this.tween, false);
                }

                //invert starting point from current waypoint
                this.startPoint = (((this.waypoints.length - 1) | 0) - this.currentPoint) | 0;
                this.StartMove();
                DG.Tweening.TweenExtensions.ForceInit(this.tween);
                //set moving object to the reversed time progress
                this.tween.fullPosition = DG.Tweening.TweenExtensions.Duration(this.tween, false) * timeRemaining;
            },
            /*SWS.splineMove.Reverse end.*/

            /*SWS.splineMove.SetPath start.*/
            
            SetPath: function (newPath) {
                //disable any running movement methods
                this.Stop();
                //set new path container
                this.pathContainer = newPath;
                //restart movement
                this.StartMove();
            },
            /*SWS.splineMove.SetPath end.*/

            /*SWS.splineMove.Stop start.*/
            
            Stop: function () {
                this.StopAllCoroutines();
                this.waitRoutine = null;

                if (this.tween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.tween);
                }
                this.tween = null;
            },
            /*SWS.splineMove.Stop end.*/

            /*SWS.splineMove.ResetToStart start.*/
            
            ResetToStart: function () {
                var $t;
                this.Stop();
                this.currentPoint = 0;
                if (UnityEngine.Object.op_Implicit(this.pathContainer)) {
                    this.transform.position = ($t = this.pathContainer.waypoints)[this.currentPoint].position.$clone().add( new pc.Vec3( 0, this.sizeToAdd, 0 ) );
                }
            },
            /*SWS.splineMove.ResetToStart end.*/

            /*SWS.splineMove.ChangeSpeed start.*/
            
            ChangeSpeed: function (value) {
                //calulate new timeScale value based on original speed
                var newValue;
                if (this.timeValue === SWS.splineMove.TimeValue.speed) {
                    newValue = value / this.originSpeed;
                } else {
                    newValue = this.originSpeed / value;
                }

                //set speed, change timeScale percentually
                this.speed = value;
                if (this.tween != null) {
                    this.tween.timeScale = newValue;
                }
            },
            /*SWS.splineMove.ChangeSpeed end.*/

            /*SWS.splineMove.IsMoving start.*/
            /**
             * Returns whether the movement tween is active.
             Still true when moveToPath or paused.
             *
             * @instance
             * @public
             * @this SWS.splineMove
             * @memberof SWS.splineMove
             * @return  {boolean}
             */
            IsMoving: function () {
                return this.tween != null;
            },
            /*SWS.splineMove.IsMoving end.*/

            /*SWS.splineMove.IsPaused start.*/
            /**
             * Returns true if the movement is currently paused.
             *
             * @instance
             * @public
             * @this SWS.splineMove
             * @memberof SWS.splineMove
             * @return  {boolean}
             */
            IsPaused: function () {
                return this.waitRoutine != null;
            },
            /*SWS.splineMove.IsPaused end.*/


        }
    });
    /*SWS.splineMove end.*/

    /*SWS.splineMove+LocalType start.*/
    Bridge.define("SWS.splineMove.LocalType", {
        $kind: "nested enum",
        statics: {
            fields: {
                none: 0,
                toPath: 1,
                toObject: 2
            }
        }
    });
    /*SWS.splineMove+LocalType end.*/

    /*SWS.splineMove+LoopType start.*/
    Bridge.define("SWS.splineMove.LoopType", {
        $kind: "nested enum",
        statics: {
            fields: {
                none: 0,
                loop: 1,
                pingPong: 2,
                random: 3,
                yoyo: 4
            }
        }
    });
    /*SWS.splineMove+LoopType end.*/

    /*SWS.splineMove+RotationType start.*/
    Bridge.define("SWS.splineMove.RotationType", {
        $kind: "nested enum",
        statics: {
            fields: {
                none: 0,
                all: 1
            }
        }
    });
    /*SWS.splineMove+RotationType end.*/

    /*SWS.splineMove+TimeValue start.*/
    Bridge.define("SWS.splineMove.TimeValue", {
        $kind: "nested enum",
        statics: {
            fields: {
                time: 0,
                speed: 1
            }
        }
    });
    /*SWS.splineMove+TimeValue end.*/

    /*SWS.WaypointManager start.*/
    
    Bridge.define("SWS.WaypointManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                
                Paths: null
            },
            ctors: {
                init: function () {
                    this.Paths = new (System.Collections.Generic.Dictionary$2(System.String,SWS.PathManager)).ctor();
                }
            },
            methods: {
                /*SWS.WaypointManager.AddPath:static start.*/
                
                AddPath: function (path) {
                    //check if the path has been instantiated,
                    //then remove the clone naming scheme
                    var pathName = path.name;
                    if (System.String.contains(pathName,"(Clone)")) {
                        pathName = System.String.replaceAll(pathName, "(Clone)", "");
                    }

                    //try to get PathManager component
                    var pathMan = path.GetComponentInChildren(SWS.PathManager);
                    if (UnityEngine.MonoBehaviour.op_Equality(pathMan, null)) {
                        console.warn("Called AddPath() but GameObject " + (pathName || "") + " has no PathManager attached.");
                        return;
                    }

                    SWS.WaypointManager.CleanUp();

                    //check if our dictionary already contains this path
                    //in case it exists already we add a unique number to the end
                    if (SWS.WaypointManager.Paths.containsKey(pathName)) {
                        //find unique naming for it
                        var i = 1;
                        while (SWS.WaypointManager.Paths.containsKey((pathName || "") + "#" + i)) {
                            i = (i + 1) | 0;
                        }

                        pathName = (pathName || "") + (("#" + i) || "");
                        console.log("Renamed " + (path.name || "") + " to " + (pathName || "") + " because a path with the same name was found.");
                    }

                    //rename path and add it to dictionary
                    path.name = pathName;
                    SWS.WaypointManager.Paths.add(pathName, pathMan);
                },
                /*SWS.WaypointManager.AddPath:static end.*/

                /*SWS.WaypointManager.CleanUp:static start.*/
                
                CleanUp: function () {
                    var keys = System.Linq.Enumerable.from(SWS.WaypointManager.Paths, System.Collections.Generic.KeyValuePair$2(System.String,SWS.PathManager)).where(function (p) {
                            return UnityEngine.MonoBehaviour.op_Equality(p.value, null);
                        }).select(function (p) {
                        return p.key;
                    }).ToArray(System.String);
                    for (var i = 0; i < keys.length; i = (i + 1) | 0) {
                        SWS.WaypointManager.Paths.remove(keys[i]);
                    }
                },
                /*SWS.WaypointManager.CleanUp:static end.*/

                /*SWS.WaypointManager.DrawStraight:static start.*/
                
                DrawStraight: function (waypoints) {
                    for (var i = 0; i < ((waypoints.length - 1) | 0); i = (i + 1) | 0) {
                        UnityEngine.Gizmos.DrawLine(waypoints[i].$clone(), waypoints[((i + 1) | 0)].$clone());
                    }
                },
                /*SWS.WaypointManager.DrawStraight:static end.*/

                /*SWS.WaypointManager.DrawCurved:static start.*/
                
                DrawCurved: function (pathPoints) {
                    pathPoints = SWS.WaypointManager.GetCurved(pathPoints);
                    var prevPt = pathPoints[0].$clone();
                    var currPt = new UnityEngine.Vector3();

                    for (var i = 1; i < pathPoints.length; i = (i + 1) | 0) {
                        currPt = pathPoints[i].$clone();
                        UnityEngine.Gizmos.DrawLine(currPt.$clone(), prevPt.$clone());
                        prevPt = currPt.$clone();
                    }
                },
                /*SWS.WaypointManager.DrawCurved:static end.*/

                /*SWS.WaypointManager.GetCurved:static start.*/
                GetCurved: function (waypoints) {
                    //helper array for curved paths, includes control points for waypoint array
                    var gizmoPoints = System.Array.init(((waypoints.length + 2) | 0), function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    System.Array.copy(waypoints, 0, gizmoPoints, 1, waypoints.length);
                    gizmoPoints[0] = waypoints[1].$clone();
                    gizmoPoints[((gizmoPoints.length - 1) | 0)] = gizmoPoints[((gizmoPoints.length - 2) | 0)].$clone();

                    var drawPs;
                    var currPt = new UnityEngine.Vector3();

                    //store draw points
                    var subdivisions = Bridge.Int.mul(gizmoPoints.length, 10);
                    drawPs = System.Array.init(((subdivisions + 1) | 0), function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i <= subdivisions; i = (i + 1) | 0) {
                        var pm = i / subdivisions;
                        currPt = SWS.WaypointManager.GetPoint(gizmoPoints, pm);
                        drawPs[i] = currPt.$clone();
                    }

                    return drawPs;
                },
                /*SWS.WaypointManager.GetCurved:static end.*/

                /*SWS.WaypointManager.GetPoint:static start.*/
                
                GetPoint: function (gizmoPoints, t) {
                    var numSections = (gizmoPoints.length - 3) | 0;
                    var tSec = Math.floor(t * numSections);
                    var currPt = (numSections - 1) | 0;
                    if (currPt > tSec) {
                        currPt = tSec;
                    }
                    var u = t * numSections - currPt;

                    var a = gizmoPoints[currPt].$clone();
                    var b = gizmoPoints[((currPt + 1) | 0)].$clone();
                    var c = gizmoPoints[((currPt + 2) | 0)].$clone();
                    var d = gizmoPoints[((currPt + 3) | 0)].$clone();

                    return ((a.$clone().scale( -1 ).add( b.$clone().scale( 3.0 ) ).sub( c.$clone().scale( 3.0 ) ).add( d )).scale( (u * u * u) ).add( (a.$clone().scale( 2.0 ).sub( b.$clone().scale( 5.0 ) ).add( c.$clone().scale( 4.0 ) ).sub( d )).scale( (u * u) ) ).add( (a.$clone().scale( -1 ).add( c )).scale( u ) ).add( b.$clone().scale( 2.0 ) )).scale( 0.5 );
                },
                /*SWS.WaypointManager.GetPoint:static end.*/

                /*SWS.WaypointManager.GetPathLength:static start.*/
                
                GetPathLength: function (waypoints) {
                    var dist = 0.0;
                    for (var i = 0; i < ((waypoints.length - 1) | 0); i = (i + 1) | 0) {
                        dist += pc.Vec3.distance( waypoints[i], waypoints[((i + 1) | 0)] );
                    }
                    return dist;
                },
                /*SWS.WaypointManager.GetPathLength:static end.*/

                /*SWS.WaypointManager.SmoothCurve:static start.*/
                
                SmoothCurve: function (pathToCurve, interpolations) {
                    var tempPoints;
                    var curvedPoints;
                    var pointsLength = 0;
                    var curvedLength = 0;

                    if (interpolations < 1) {
                        interpolations = 1;
                    }

                    pointsLength = pathToCurve.Count;
                    curvedLength = ((Bridge.Int.mul(pointsLength, Math.round(interpolations))) - 1) | 0;
                    curvedPoints = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).$ctor2(curvedLength);

                    var t = 0.0;
                    for (var pointInTimeOnCurve = 0; pointInTimeOnCurve < ((curvedLength + 1) | 0); pointInTimeOnCurve = (pointInTimeOnCurve + 1) | 0) {
                        t = ( curvedLength - 0 ) === 0 ? 0 : ( ((pointInTimeOnCurve - 0) / (curvedLength - 0)) );
                        tempPoints = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).$ctor1(pathToCurve);
                        for (var j = (pointsLength - 1) | 0; j > 0; j = (j - 1) | 0) {
                            for (var i = 0; i < j; i = (i + 1) | 0) {
                                tempPoints.setItem(i, tempPoints.getItem(i).$clone().scale( (1 - t) ).add( tempPoints.getItem(((i + 1) | 0)).$clone().scale( t ) ));
                            }
                        }
                        curvedPoints.add(tempPoints.getItem(0).$clone());
                    }

                    return curvedPoints;
                },
                /*SWS.WaypointManager.SmoothCurve:static end.*/


            }
        },
        fields: {
            /**
             * Key for placing new waypoints in the scene
             *
             * @instance
             * @public
             * @memberof SWS.WaypointManager
             * @type UnityEngine.KeyCode
             */
            placementKey: 0,
            /**
             * Key for placing new waypoints at the current scene view camera position
             *
             * @instance
             * @public
             * @memberof SWS.WaypointManager
             * @type UnityEngine.KeyCode
             */
            viewPlacementKey: 0
        },
        ctors: {
            init: function () {
                this.placementKey = UnityEngine.KeyCode.P;
                this.viewPlacementKey = UnityEngine.KeyCode.C;
            }
        },
        methods: {
            /*SWS.WaypointManager.Awake start.*/
            Awake: function () {
                //http://dotween.demigiant.com/documentation.php#init
                //initialize DOTween immediately instead than having it being
                //automatically initialized when the first Tweener is created.
                //set up specific settings in the DOTween utility panel!
                DG.Tweening.DOTween.Init();
            },
            /*SWS.WaypointManager.Awake end.*/

            /*SWS.WaypointManager.OnDestroy start.*/
            OnDestroy: function () {
                SWS.WaypointManager.Paths.clear();
            },
            /*SWS.WaypointManager.OnDestroy end.*/


        }
    });
    /*SWS.WaypointManager end.*/

    /*TimeSinceStartup start.*/
    Bridge.define("TimeSinceStartup", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Text: null
        },
        methods: {
            /*TimeSinceStartup.Update start.*/
            Update: function () {
                this.Text.text = System.String.format("Time since startup: {0}", [Bridge.box(Bridge.Int.clip32(UnityEngine.Time.realtimeSinceStartup), System.Int32)]);
            },
            /*TimeSinceStartup.Update end.*/


        }
    });
    /*TimeSinceStartup end.*/

    /*Trigger start.*/
    Bridge.define("Trigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            OnTriggerEnterEvent: null,
            OnTriggerStayEvent: null,
            OnTriggerExitEvent: null
        },
        methods: {
            /*Trigger.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                this.OnTriggerEnterEvent.Invoke();
            },
            /*Trigger.OnTriggerEnter end.*/

            /*Trigger.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
                this.OnTriggerStayEvent.Invoke();
            },
            /*Trigger.OnTriggerStay end.*/

            /*Trigger.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
                this.OnTriggerExitEvent.Invoke();
            },
            /*Trigger.OnTriggerExit end.*/


        }
    });
    /*Trigger end.*/

    /*UnityStandardAssets.Cameras.AbstractTargetFollower start.*/
    Bridge.define("UnityStandardAssets.Cameras.AbstractTargetFollower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            m_Target: null,
            m_AutoTargetPlayer: false,
            m_UpdateType: 0,
            targetRigidbody: null
        },
        props: {
            Target: {
                get: function () {
                    return this.m_Target;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_AutoTargetPlayer = true;
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.Start start.*/
            Start: function () {
                // if auto targeting is used, find the object tagged "Player"
                // any class inheriting from this should call base.Start() to perform this action!
                if (this.m_AutoTargetPlayer) {
                    this.FindAndTargetPlayer();
                }
                if (UnityEngine.Component.op_Equality(this.m_Target, null)) {
                    return;
                }
                this.targetRigidbody = this.m_Target.GetComponent(UnityEngine.Rigidbody);
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.Start end.*/

            /*UnityStandardAssets.Cameras.AbstractTargetFollower.FixedUpdate start.*/
            FixedUpdate: function () {
                // we update from here if updatetype is set to Fixed, or in auto mode,
                // if the target has a rigidbody, and isn't kinematic.
                if (this.m_AutoTargetPlayer && (UnityEngine.Component.op_Equality(this.m_Target, null) || !this.m_Target.gameObject.activeSelf)) {
                    this.FindAndTargetPlayer();
                }
                if (this.m_UpdateType === UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType.FixedUpdate) {
                    this.FollowTarget(UnityEngine.Time.deltaTime);
                }
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.FixedUpdate end.*/

            /*UnityStandardAssets.Cameras.AbstractTargetFollower.LateUpdate start.*/
            LateUpdate: function () {
                // we update from here if updatetype is set to Late, or in auto mode,
                // if the target does not have a rigidbody, or - does have a rigidbody but is set to kinematic.
                if (this.m_AutoTargetPlayer && (UnityEngine.Component.op_Equality(this.m_Target, null) || !this.m_Target.gameObject.activeSelf)) {
                    this.FindAndTargetPlayer();
                }
                if (this.m_UpdateType === UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType.LateUpdate) {
                    this.FollowTarget(UnityEngine.Time.deltaTime);
                }
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.LateUpdate end.*/

            /*UnityStandardAssets.Cameras.AbstractTargetFollower.ManualUpdate start.*/
            ManualUpdate: function () {
                // we update from here if updatetype is set to Late, or in auto mode,
                // if the target does not have a rigidbody, or - does have a rigidbody but is set to kinematic.
                if (this.m_AutoTargetPlayer && (UnityEngine.Component.op_Equality(this.m_Target, null) || !this.m_Target.gameObject.activeSelf)) {
                    this.FindAndTargetPlayer();
                }
                if (this.m_UpdateType === UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType.ManualUpdate) {
                    this.FollowTarget(UnityEngine.Time.deltaTime);
                }
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.ManualUpdate end.*/

            /*UnityStandardAssets.Cameras.AbstractTargetFollower.FindAndTargetPlayer start.*/
            FindAndTargetPlayer: function () {
                // auto target an object tagged player, if no target has been assigned
                var targetObj = UnityEngine.GameObject.FindGameObjectWithTag("Player");
                if (UnityEngine.Object.op_Implicit(targetObj)) {
                    this.SetTarget(targetObj.transform);
                }
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.FindAndTargetPlayer end.*/

            /*UnityStandardAssets.Cameras.AbstractTargetFollower.SetTarget start.*/
            SetTarget: function (newTransform) {
                this.m_Target = newTransform;
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.SetTarget end.*/


        }
    });
    /*UnityStandardAssets.Cameras.AbstractTargetFollower end.*/

    /*UnityStandardAssets.Cameras.AbstractTargetFollower+UpdateType start.*/
    Bridge.define("UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType", {
        $kind: "nested enum",
        statics: {
            fields: {
                FixedUpdate: 0,
                LateUpdate: 1,
                ManualUpdate: 2
            }
        }
    });
    /*UnityStandardAssets.Cameras.AbstractTargetFollower+UpdateType end.*/

    /*UnityStandardAssets.Cameras.ProtectCameraFromWallClip start.*/
    Bridge.define("UnityStandardAssets.Cameras.ProtectCameraFromWallClip", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*UnityStandardAssets.Cameras.ProtectCameraFromWallClip end.*/

    /*UnityStandardAssets.Vehicles.Car.CarAudio start.*/
    Bridge.define("UnityStandardAssets.Vehicles.Car.CarAudio", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*UnityStandardAssets.Vehicles.Car.CarAudio.ULerp:static start.*/
                ULerp: function (from, to, value) {
                    return (1.0 - value) * from + value * to;
                },
                /*UnityStandardAssets.Vehicles.Car.CarAudio.ULerp:static end.*/


            }
        },
        fields: {
            engineSoundStyle: 0,
            lowAccelClip: null,
            lowDecelClip: null,
            highAccelClip: null,
            highDecelClip: null,
            pitchMultiplier: 0,
            lowPitchMin: 0,
            lowPitchMax: 0,
            highPitchMultiplier: 0,
            maxRolloffDistance: 0,
            dopplerLevel: 0,
            m_LowAccel: null,
            m_LowDecel: null,
            m_HighAccel: null,
            m_HighDecel: null,
            m_StartedSound: false,
            m_CarController: null
        },
        ctors: {
            init: function () {
                this.engineSoundStyle = UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions.FourChannel;
                this.pitchMultiplier = 1.0;
                this.lowPitchMin = 1.0;
                this.lowPitchMax = 6.0;
                this.highPitchMultiplier = 0.25;
                this.maxRolloffDistance = 500;
                this.dopplerLevel = 1;
            }
        },
        methods: {
            /*UnityStandardAssets.Vehicles.Car.CarAudio.StartSound start.*/
            StartSound: function () {
                // get the carcontroller ( this will not be null as we have require component)
                this.m_CarController = this.GetComponent(CarController);

                // setup the simple audio source
                this.m_HighAccel = this.SetUpEngineAudioSource(this.highAccelClip);

                // if we have four channel audio setup the four audio sources
                if (this.engineSoundStyle === UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions.FourChannel) {
                    this.m_LowAccel = this.SetUpEngineAudioSource(this.lowAccelClip);
                    this.m_LowDecel = this.SetUpEngineAudioSource(this.lowDecelClip);
                    this.m_HighDecel = this.SetUpEngineAudioSource(this.highDecelClip);
                }

                // flag that we have started the sounds playing
                this.m_StartedSound = true;
            },
            /*UnityStandardAssets.Vehicles.Car.CarAudio.StartSound end.*/

            /*UnityStandardAssets.Vehicles.Car.CarAudio.StopSound start.*/
            StopSound: function () {
                var $t;
                //Destroy all audio sources on this object:
                $t = Bridge.getEnumerator(this.GetComponents(UnityEngine.AudioSource));
                try {
                    while ($t.moveNext()) {
                        var source = $t.Current;
                        UnityEngine.Object.Destroy(source);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.m_StartedSound = false;
            },
            /*UnityStandardAssets.Vehicles.Car.CarAudio.StopSound end.*/

            /*UnityStandardAssets.Vehicles.Car.CarAudio.Update start.*/
            Update: function () {
                // get the distance to main camera
                var camDist = (UnityEngine.Camera.main.transform.position.$clone().sub( this.transform.position )).lengthSq();

                // stop sound if the object is beyond the maximum roll off distance
                if (this.m_StartedSound && camDist > this.maxRolloffDistance * this.maxRolloffDistance) {
                    this.StopSound();
                }

                // start the sound if not playing and it is nearer than the maximum distance
                if (!this.m_StartedSound && camDist < this.maxRolloffDistance * this.maxRolloffDistance) {
                    this.StartSound();
                }

                if (this.m_StartedSound) {
                    // The pitch is interpolated between the min and max values, according to the car's revs.
                    var pitch = UnityStandardAssets.Vehicles.Car.CarAudio.ULerp(this.lowPitchMin, this.lowPitchMax, this.m_CarController.Revs);

                    // clamp to minimum pitch (note, not clamped to max for high revs while burning out)
                    pitch = UnityEngine.Mathf.Min(this.lowPitchMax, pitch);

                    if (this.engineSoundStyle === UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions.Simple) {
                        // for 1 channel engine sound, it's oh so simple:
                        this.m_HighAccel.pitch = pitch * this.pitchMultiplier * this.highPitchMultiplier;
                        //m_HighAccel.dopplerLevel = useDoppler ? dopplerLevel : 0;
                        this.m_HighAccel.volume = 1;
                    } else {
                        // for 4 channel engine sound, it's a little more complex:

                        // adjust the pitches based on the multipliers
                        this.m_LowAccel.pitch = pitch * this.pitchMultiplier;
                        this.m_LowDecel.pitch = pitch * this.pitchMultiplier;
                        this.m_HighAccel.pitch = pitch * this.highPitchMultiplier * this.pitchMultiplier;
                        this.m_HighDecel.pitch = pitch * this.highPitchMultiplier * this.pitchMultiplier;

                        // get values for fading the sounds based on the acceleration
                        var accFade = Math.abs(this.m_CarController.AccelInput);
                        var decFade = 1 - accFade;

                        // get the high fade value based on the cars revs
                        var highFade = ( 0.8 - 0.2 ) === 0 ? 0 : ( ((this.m_CarController.Revs - 0.2) / (0.8 - 0.2)) );
                        var lowFade = 1 - highFade;

                        // adjust the values to be more realistic
                        highFade = 1 - ((1 - highFade) * (1 - highFade));
                        lowFade = 1 - ((1 - lowFade) * (1 - lowFade));
                        accFade = 1 - ((1 - accFade) * (1 - accFade));
                        decFade = 1 - ((1 - decFade) * (1 - decFade));

                        // adjust the source volumes based on the fade values
                        this.m_LowAccel.volume = lowFade * accFade;
                        this.m_LowDecel.volume = lowFade * decFade;
                        this.m_HighAccel.volume = highFade * accFade;
                        this.m_HighDecel.volume = highFade * decFade;

                        // adjust the doppler levels
                        //m_HighAccel.dopplerLevel = useDoppler ? dopplerLevel : 0;
                        //m_LowAccel.dopplerLevel = useDoppler ? dopplerLevel : 0;
                        //m_HighDecel.dopplerLevel = useDoppler ? dopplerLevel : 0;
                        //m_LowDecel.dopplerLevel = useDoppler ? dopplerLevel : 0;
                    }
                }
            },
            /*UnityStandardAssets.Vehicles.Car.CarAudio.Update end.*/

            /*UnityStandardAssets.Vehicles.Car.CarAudio.SetUpEngineAudioSource start.*/
            SetUpEngineAudioSource: function (clip) {
                // create the new audio source component on the game object and set up its properties
                var source = this.gameObject.AddComponent(UnityEngine.AudioSource);
                source.clip = clip;
                source.volume = 0;
                source.loop = true;

                // start the clip from a random point
                //source.time = (float)Random.Range((float)0f, (float)clip.length);
                source.Play();
                //source.minDistance = 5;
                //source.maxDistance = maxRolloffDistance;
                //source.dopplerLevel = 0;
                return source;
            },
            /*UnityStandardAssets.Vehicles.Car.CarAudio.SetUpEngineAudioSource end.*/


        }
    });
    /*UnityStandardAssets.Vehicles.Car.CarAudio end.*/

    /*UnityStandardAssets.Vehicles.Car.CarAudio+EngineAudioOptions start.*/
    Bridge.define("UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions", {
        $kind: "nested enum",
        statics: {
            fields: {
                Simple: 0,
                FourChannel: 1
            }
        }
    });
    /*UnityStandardAssets.Vehicles.Car.CarAudio+EngineAudioOptions end.*/

    /*UnityStandardAssets.Vehicles.Car.SkidTrail start.*/
    Bridge.define("UnityStandardAssets.Vehicles.Car.SkidTrail", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            m_PersistTime: 0
        },
        methods: {
            /*UnityStandardAssets.Vehicles.Car.SkidTrail.Start start.*/
            Start: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (UnityEngine.Component.op_Equality(this.transform.parent.parent, null)) {
                                            this.Destroy(this.gameObject, this.m_PersistTime);
                                        }

                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UnityStandardAssets.Vehicles.Car.SkidTrail.Start end.*/


        }
    });
    /*UnityStandardAssets.Vehicles.Car.SkidTrail end.*/

    /*UnityStandardAssets.Vehicles.Car.Suspension start.*/
    Bridge.define("UnityStandardAssets.Vehicles.Car.Suspension", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            wheel: null,
            m_TargetOriginalPosition: null,
            m_Origin: null
        },
        ctors: {
            init: function () {
                this.m_TargetOriginalPosition = new UnityEngine.Vector3();
                this.m_Origin = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*UnityStandardAssets.Vehicles.Car.Suspension.Start start.*/
            Start: function () {
                this.m_TargetOriginalPosition = this.wheel.transform.localPosition.$clone();
                this.m_Origin = this.transform.localPosition.$clone();
            },
            /*UnityStandardAssets.Vehicles.Car.Suspension.Start end.*/

            /*UnityStandardAssets.Vehicles.Car.Suspension.Update start.*/
            Update: function () {
                this.transform.localPosition = this.m_Origin.$clone().add( (this.wheel.transform.localPosition.$clone().sub( this.m_TargetOriginalPosition )) );
            },
            /*UnityStandardAssets.Vehicles.Car.Suspension.Update end.*/


        }
    });
    /*UnityStandardAssets.Vehicles.Car.Suspension end.*/

    /*WheatSliderWidget start.*/
    Bridge.define("WheatSliderWidget", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Slider: null,
            RaceCar: null,
            BarIconImage: null,
            WheatImage: null,
            MaxWheat: 0,
            _ImageSourcePosition: null,
            _IsAnimationCompleted: false
        },
        ctors: {
            init: function () {
                this._ImageSourcePosition = new UnityEngine.Vector3();
                this.MaxWheat = 200;
                this._IsAnimationCompleted = true;
            }
        },
        methods: {
            /*WheatSliderWidget.Start start.*/
            Start: function () {
                var color = new pc.Color( 1, 1, 1, 1 );
                color.a = 0;
                this.WheatImage.color = color.$clone();
                this._ImageSourcePosition = this.WheatImage.rectTransform.position.$clone();

                this.Slider.minValue = 0;
                this.Slider.maxValue = this.MaxWheat;
                this.Slider.value = this.RaceCar.Wheat;

                this.RaceCar.OnWheatCollected = Bridge.fn.combine(this.RaceCar.OnWheatCollected, Bridge.fn.cacheBind(this, this.OnWheatCollectedHandler));
            },
            /*WheatSliderWidget.Start end.*/

            /*WheatSliderWidget.OnWheatCollectedHandler start.*/
            OnWheatCollectedHandler: function () {

                if (this._IsAnimationCompleted) {
                    this._IsAnimationCompleted = false;
                    DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.WheatImage.transform, 0.8, 0.4), 1);
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this.WheatImage, 1, 0.1), Bridge.fn.bind(this, function () {
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this.WheatImage, 1, 0.2), Bridge.fn.bind(this, function () {
                            DG.Tweening.DOTweenModuleUI.DOFade$2(this.WheatImage, 0, 0.1);
                        }));
                    }));
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions, DG.Tweening.ShortcutExtensions.DOMove(this.WheatImage.rectTransform, this.BarIconImage.rectTransform.position.$clone(), 0.4), this._ImageSourcePosition.$clone()), Bridge.fn.bind(this, function () {
                        DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, 1.05, 0.1), 2, DG.Tweening.LoopType.Yoyo);
                        this._IsAnimationCompleted = true;
                    }));
                }

                this.Slider.value = this.RaceCar.Wheat;
            },
            /*WheatSliderWidget.OnWheatCollectedHandler end.*/


        }
    });
    /*WheatSliderWidget end.*/

    /*WheelEffects start.*/
    Bridge.define("WheelEffects", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                skidTrailsDetachedParent: null
            }
        },
        fields: {
            SkidTrailPrefab: null,
            skidParticles: null,
            skidding: false,
            PlayingAudio: false,
            m_AudioSource: null,
            m_SkidTrail: null,
            m_WheelCollider: null
        },
        methods: {
            /*WheelEffects.Start start.*/
            Start: function () {
                this.skidParticles = this.transform.root.GetComponentInChildren(UnityEngine.ParticleSystem);

                if (UnityEngine.Component.op_Equality(this.skidParticles, null)) {
                    console.warn(" no particle system found on car to generate smoke particles");
                } else {
                    this.skidParticles.Stop();
                }

                this.m_WheelCollider = this.GetComponent(UnityEngine.WheelCollider);
                this.m_AudioSource = this.GetComponent(UnityEngine.AudioSource);
                this.PlayingAudio = false;

                if (UnityEngine.Component.op_Equality(WheelEffects.skidTrailsDetachedParent, null)) {
                    WheelEffects.skidTrailsDetachedParent = new UnityEngine.GameObject.$ctor2("Skid Trails - Detached").transform;
                }
            },
            /*WheelEffects.Start end.*/

            /*WheelEffects.EmitTyreSmoke start.*/
            EmitTyreSmoke: function () {
                this.skidParticles.transform.gameObject.SetActive(false);
                this.skidParticles.transform.position = this.transform.position.$clone().sub( this.transform.up.$clone().scale( this.m_WheelCollider.radius ) );
                this.skidParticles.Emit(1);
                /* if (!skidding)
                {
                   StartCoroutine(StartSkidTrail());
                }*/
            },
            /*WheelEffects.EmitTyreSmoke end.*/

            /*WheelEffects.PlayAudio start.*/
            PlayAudio: function () {
                this.m_AudioSource.Play();
                this.PlayingAudio = true;
            },
            /*WheelEffects.PlayAudio end.*/

            /*WheelEffects.StopAudio start.*/
            StopAudio: function () {
                this.m_AudioSource.Stop();
                this.PlayingAudio = false;
            },
            /*WheelEffects.StopAudio end.*/

            /*WheelEffects.StartSkidTrail start.*/
            StartSkidTrail: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.skidding = true;
                                        this.m_SkidTrail = UnityEngine.Object.Instantiate(UnityEngine.Transform, this.SkidTrailPrefab);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( UnityEngine.Component.op_Equality(this.m_SkidTrail, null) ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.m_SkidTrail.parent = this.transform;
                                        this.m_SkidTrail.localPosition = pc.Vec3.UP.clone().scale( -1 ).scale( this.m_WheelCollider.radius );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*WheelEffects.StartSkidTrail end.*/

            /*WheelEffects.EndSkidTrail start.*/
            EndSkidTrail: function () {
                if (!this.skidding) {
                    return;
                }
                this.skidding = false;
                this.m_SkidTrail.parent = WheelEffects.skidTrailsDetachedParent;
                this.Destroy(this.m_SkidTrail.gameObject, 10);
            },
            /*WheelEffects.EndSkidTrail end.*/


        }
    });
    /*WheelEffects end.*/

    /*WinScreenWidget start.*/
    Bridge.define("WinScreenWidget", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            RaceCar: null,
            WheatText: null,
            WheatMultiplier: 0
        },
        ctors: {
            init: function () {
                this.WheatMultiplier = 10;
            }
        },
        methods: {
            /*WinScreenWidget.Start start.*/
            Start: function () {
                var wheatTotal = Bridge.Int.mul(this.RaceCar.Wheat, this.WheatMultiplier);

                Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.Score, wheatTotal);

                this.WheatText.text = Bridge.toString(wheatTotal);
            },
            /*WinScreenWidget.Start end.*/


        }
    });
    /*WinScreenWidget end.*/

    /*DynamicJoystick start.*/
    Bridge.define("DynamicJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0
        },
        props: {
            MoveThreshold: {
                get: function () {
                    return this.moveThreshold;
                },
                set: function (value) {
                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
                this.moveThreshold = 1;
            }
        },
        methods: {
            /*DynamicJoystick.Start start.*/
            Start: function () {
                this.MoveThreshold = this.moveThreshold;
                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*DynamicJoystick.Start end.*/

            /*DynamicJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerUp end.*/

            /*DynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
                if (magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*DynamicJoystick.HandleInput end.*/


        }
    });
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    Bridge.define("FixedJoystick", {
        inherits: [Joystick]
    });
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    Bridge.define("FloatingJoystick", {
        inherits: [Joystick],
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*FloatingJoystick.Start start.*/
            Start: function () {
                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*FloatingJoystick.Start end.*/

            /*FloatingJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerDown end.*/

            /*FloatingJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerUp end.*/


        }
    });
    /*FloatingJoystick end.*/

    /*SWS.BezierPathManager start.*/
    
    Bridge.define("SWS.BezierPathManager", {
        inherits: [SWS.PathManager],
        fields: {
            
            pathPoints: null,
            
            bPoints: null,
            
            showHandles: false,
            /**
             * Toggles independent control point handles on/off.
             *
             * @instance
             * @public
             * @memberof SWS.BezierPathManager
             * @default true
             * @type boolean
             */
            connectHandles: false,
            
            color3: null,
            
            pathDetail: 0,
            
            customDetail: false,
            
            segmentDetail: null
        },
        ctors: {
            init: function () {
                this.color3 = new UnityEngine.Color();
                this.pathPoints = System.Array.init([], UnityEngine.Vector3);
                this.bPoints = new (System.Collections.Generic.List$1(SWS.BezierPoint)).ctor();
                this.showHandles = true;
                this.connectHandles = true;
                this.color3 = new pc.Color( 0.423529416, 0.5921569, 1, 1 );
                this.pathDetail = 1;
                this.customDetail = false;
                this.segmentDetail = new (System.Collections.Generic.List$1(System.Single)).ctor();
            }
        },
        methods: {
            /*SWS.BezierPathManager.Awake$1 start.*/
            Awake$1: function () {
                SWS.WaypointManager.AddPath(this.gameObject);

                //do not recalculate automatically with runtime created paths
                if (this.bPoints == null || this.bPoints.Count === 0) {
                    return;
                }

                this.CalculatePath();
            },
            /*SWS.BezierPathManager.Awake$1 end.*/

            /*SWS.BezierPathManager.Create$1 start.*/
            /**
             * Create or update waypoint representation from the array passed in, optionally parenting them to the path.
             *
             * @instance
             * @public
             * @override
             * @this SWS.BezierPathManager
             * @memberof SWS.BezierPathManager
             * @param   {Array.<UnityEngine.Transform>}    waypoints       
             * @param   {boolean}                          makeChildren
             * @return  {void}
             */
            Create$1: function (waypoints, makeChildren) {
                if (makeChildren === void 0) { makeChildren = false; }
                if (waypoints.length < 2) {
                    console.warn("Not enough waypoints placed - minimum is 2. Cancelling.");
                    return;
                }

                if (makeChildren) {
                    for (var i = 0; i < waypoints.length; i = (i + 1) | 0) {
                        waypoints[i].parent = this.transform;
                    }
                }

                this.bPoints.clear();
                for (var i1 = 0; i1 < waypoints.length; i1 = (i1 + 1) | 0) {
                    var point = new SWS.BezierPoint();
                    point.wp = waypoints[i1];
                    point.cp = System.Array.init(2, null, UnityEngine.Transform);
                    point.cp[0] = point.wp.GetChild(0);
                    point.cp[1] = point.wp.GetChild(1);
                    this.bPoints.add(point);
                }

                //recalculate after modification
                this.CalculatePath();
            },
            /*SWS.BezierPathManager.Create$1 end.*/

            /*SWS.BezierPathManager.OnDrawGizmos$1 start.*/
            OnDrawGizmos$1: function () {
                if (this.bPoints.Count <= 0) {
                    return;
                }

                //assign path ends color
                var start = this.bPoints.getItem(0).wp.position.$clone();
                var end = this.bPoints.getItem(((this.bPoints.Count - 1) | 0)).wp.position.$clone();
                UnityEngine.Gizmos.color = this.color1.$clone();
                UnityEngine.Gizmos.DrawWireCube(start.$clone(), this.size.$clone().scale( this.GetHandleSize(start.$clone()) ).scale( 1.5 ));
                UnityEngine.Gizmos.DrawWireCube(end.$clone(), this.size.$clone().scale( this.GetHandleSize(end.$clone()) ).scale( 1.5 ));

                //assign line and waypoints color
                UnityEngine.Gizmos.color = this.color2.$clone();
                for (var i = 1; i < ((this.bPoints.Count - 1) | 0); i = (i + 1) | 0) {
                    UnityEngine.Gizmos.DrawWireSphere(this.bPoints.getItem(i).wp.position.$clone(), this.radius * this.GetHandleSize(this.bPoints.getItem(i).wp.position.$clone()));
                }

                //draw linear or curved lines with the same color
                if (this.drawCurved && this.bPoints.Count >= 2) {
                    SWS.WaypointManager.DrawCurved(this.pathPoints);
                } else {
                    SWS.WaypointManager.DrawStraight(this.pathPoints);
                }
            },
            /*SWS.BezierPathManager.OnDrawGizmos$1 end.*/

            /*SWS.BezierPathManager.GetPathPoints start.*/
            
            GetPathPoints: function (local) {
                if (local === void 0) { local = false; }
                var copy = System.Array.init(this.pathPoints.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);

                if (local) {
                    for (var i = 0; i < copy.length; i = (i + 1) | 0) {
                        copy[i] = this.transform.InverseTransformPoint(this.pathPoints[i]);
                    }
                } else {
                    System.Array.copy(this.pathPoints, 0, copy, 0, this.pathPoints.length);
                }

                return copy;
            },
            /*SWS.BezierPathManager.GetPathPoints end.*/

            /*SWS.BezierPathManager.GetWaypointCount start.*/
            /**
             * Returns waypoint length (should be equal to events count).
             *
             * @instance
             * @public
             * @override
             * @this SWS.BezierPathManager
             * @memberof SWS.BezierPathManager
             * @return  {number}
             */
            GetWaypointCount: function () {
                return this.bPoints.Count;
            },
            /*SWS.BezierPathManager.GetWaypointCount end.*/

            /*SWS.BezierPathManager.GetWaypoint start.*/
            /**
             * Returns the bezier path waypoint transform according to the index passed in.
             *
             * @instance
             * @public
             * @override
             * @this SWS.BezierPathManager
             * @memberof SWS.BezierPathManager
             * @param   {number}                   index
             * @return  {UnityEngine.Transform}
             */
            GetWaypoint: function (index) {
                return this.bPoints.getItem(index).wp;
            },
            /*SWS.BezierPathManager.GetWaypoint end.*/

            /*SWS.BezierPathManager.GetWaypointIndex start.*/
            /**
             * Converts bezier point on the path to waypoint index.
             Returns -1 if the point lies in between two waypoints.
             *
             * @instance
             * @public
             * @override
             * @this SWS.BezierPathManager
             * @memberof SWS.BezierPathManager
             * @param   {number}    pathPoint
             * @return  {number}
             */
            GetWaypointIndex: function (pathPoint) {
                var index = -1;
                var summedPoints = 0;
                var defaultPoints = 10;

                for (var i = 0; i < this.segmentDetail.Count; i = (i + 1) | 0) {
                    if (pathPoint === summedPoints) {
                        index = i;
                        break;
                    }

                    if (this.customDetail) {
                        summedPoints = (summedPoints + (Math.ceil(this.segmentDetail.getItem(i) * defaultPoints))) | 0;
                    } else {
                        summedPoints = (summedPoints + (Math.ceil(this.pathDetail * defaultPoints))) | 0;
                    }
                }

                return index;
            },
            /*SWS.BezierPathManager.GetWaypointIndex end.*/

            /*SWS.BezierPathManager.GetPathPointIndex start.*/
            /**
             * Converts waypoint index to bezier point on the path.
             *
             * @instance
             * @public
             * @override
             * @this SWS.BezierPathManager
             * @memberof SWS.BezierPathManager
             * @param   {number}    waypoint
             * @return  {number}
             */
            GetPathPointIndex: function (waypoint) {
                var summedPoints = 0;
                var defaultPoints = 10;

                for (var i = 0; i < this.segmentDetail.Count; i = (i + 1) | 0) {
                    if (i === waypoint) {
                        break;
                    }

                    if (this.customDetail) {
                        summedPoints = (summedPoints + (Math.ceil(this.segmentDetail.getItem(i) * defaultPoints))) | 0;
                    } else {
                        summedPoints = (summedPoints + (Math.ceil(this.pathDetail * defaultPoints))) | 0;
                    }
                }

                return summedPoints;
            },
            /*SWS.BezierPathManager.GetPathPointIndex end.*/

            /*SWS.BezierPathManager.CalculatePath start.*/
            
            CalculatePath: function () {
                var $t;
                //temporary list for final points
                var temp = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                var tempWps = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();

                //loop over bezier points (segments)
                for (var i = 0; i < ((this.bPoints.Count - 1) | 0); i = (i + 1) | 0) {
                    var bp = this.bPoints.getItem(i);
                    //get path detail value (default or custom)
                    var detail = this.pathDetail;
                    if (this.customDetail) {
                        detail = this.segmentDetail.getItem(i);
                    }
                    //calculate path points on this segment. Parameters:
                    //current waypoint position, current right handle position,
                    //next left handle position, next waypoint position, path detail
                    temp.AddRange(this.GetPoints(bp.wp.position.$clone(), bp.cp[1].position.$clone(), ($t = this.bPoints.getItem(((i + 1) | 0)).cp)[0].position.$clone(), this.bPoints.getItem(((i + 1) | 0)).wp.position.$clone(), detail));

                    tempWps.add(bp.wp);
                }
                tempWps.add(this.bPoints.getItem(((this.bPoints.Count - 1) | 0)).wp);

                //remove duplicates after calculation
                this.pathPoints = System.Linq.Enumerable.from(temp, UnityEngine.Vector3).distinct().ToArray(UnityEngine.Vector3);
                this.waypoints = tempWps.ToArray();
            },
            /*SWS.BezierPathManager.CalculatePath end.*/

            /*SWS.BezierPathManager.GetPoints start.*/
            GetPoints: function (p0, p1, p2, p3, detail) {
                //temporary list for final points on this segment
                var segmentPoints = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                //multiply detail value to have at least 5-10+ iterations
                var iterations = detail * 10.0;
                for (var n = 0; n <= iterations; n = (n + 1) | 0) {
                    //cannot increment i as a float
                    var i = n / iterations;
                    var rest = (1.0 - i);
                    //bezier formula
                    var newPos = pc.Vec3.ZERO.clone();
                    newPos = newPos.$clone().add( p0.$clone().scale( rest ).scale( rest ).scale( rest ) );
                    newPos = newPos.$clone().add( p1.$clone().scale( i ).scale( 3.0 ).scale( rest ).scale( rest ) );
                    newPos = newPos.$clone().add( p2.$clone().scale( 3.0 ).scale( i ).scale( i ).scale( rest ) );
                    newPos = newPos.$clone().add( p3.$clone().scale( i ).scale( i ).scale( i ) );
                    //add calculated point to segment
                    segmentPoints.add(newPos.$clone());
                }
                //return points on this segment
                return segmentPoints;
            },
            /*SWS.BezierPathManager.GetPoints end.*/


        },
        overloads: {
            "Awake()": "Awake$1",
            "Create(Transform[], bool)": "Create$1",
            "OnDrawGizmos()": "OnDrawGizmos$1"
        }
    });
    /*SWS.BezierPathManager end.*/

    /*UnityStandardAssets.Cameras.PivotBasedCameraRig start.*/
    Bridge.define("UnityStandardAssets.Cameras.PivotBasedCameraRig", {
        inherits: [UnityStandardAssets.Cameras.AbstractTargetFollower],
        fields: {
            m_Cam: null,
            m_Pivot: null,
            m_LastTargetPosition: null
        },
        ctors: {
            init: function () {
                this.m_LastTargetPosition = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.PivotBasedCameraRig.Awake start.*/
            Awake: function () {
                // find the camera in the object hierarchy
                this.m_Cam = this.GetComponentInChildren(UnityEngine.Camera).transform;
                this.m_Pivot = this.m_Cam.parent;
            },
            /*UnityStandardAssets.Cameras.PivotBasedCameraRig.Awake end.*/


        }
    });
    /*UnityStandardAssets.Cameras.PivotBasedCameraRig end.*/

    /*UnityStandardAssets.Cameras.LookatTarget start.*/
    Bridge.define("UnityStandardAssets.Cameras.LookatTarget", {
        inherits: [UnityStandardAssets.Cameras.AbstractTargetFollower],
        fields: {
            m_RotationRange: null,
            m_FollowSpeed: 0,
            m_FollowAngles: null,
            m_OriginalRotation: null,
            m_FollowVelocity: null
        },
        ctors: {
            init: function () {
                this.m_RotationRange = new UnityEngine.Vector2();
                this.m_FollowAngles = new UnityEngine.Vector3();
                this.m_OriginalRotation = new UnityEngine.Quaternion();
                this.m_FollowVelocity = new UnityEngine.Vector3();
                this.m_FollowSpeed = 1;
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.LookatTarget.Start start.*/
            Start: function () {
                UnityStandardAssets.Cameras.AbstractTargetFollower.prototype.Start.call(this);
                this.m_OriginalRotation = this.transform.localRotation.$clone();
            },
            /*UnityStandardAssets.Cameras.LookatTarget.Start end.*/

            /*UnityStandardAssets.Cameras.LookatTarget.FollowTarget start.*/
            FollowTarget: function (deltaTime) {
                // we make initial calculations from the original local rotation
                this.transform.localRotation = this.m_OriginalRotation.$clone();

                // tackle rotation around Y first
                var localTarget = this.transform.InverseTransformPoint(this.m_Target.position);
                var yAngle = Math.atan2(localTarget.x, localTarget.z) * UnityEngine.Mathf.Rad2Deg;

                yAngle = Math.max(-this.m_RotationRange.y * 0.5, Math.min(yAngle, this.m_RotationRange.y * 0.5));
                this.transform.localRotation = this.m_OriginalRotation.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0, yAngle, 0 ) );

                // then recalculate new local target position for rotation around X
                localTarget = this.transform.InverseTransformPoint(this.m_Target.position);
                var xAngle = Math.atan2(localTarget.y, localTarget.z) * UnityEngine.Mathf.Rad2Deg;
                xAngle = Math.max(-this.m_RotationRange.x * 0.5, Math.min(xAngle, this.m_RotationRange.x * 0.5));
                var targetAngles = new pc.Vec3( this.m_FollowAngles.x + UnityEngine.Mathf.DeltaAngle(this.m_FollowAngles.x, xAngle), this.m_FollowAngles.y + UnityEngine.Mathf.DeltaAngle(this.m_FollowAngles.y, yAngle), 0 );

                // smoothly interpolate the current angles to the target angles
                this.m_FollowAngles = pc.Vec3.smoothDamp( this.m_FollowAngles.$clone(), targetAngles.$clone(), Bridge.ref(this, "m_FollowVelocity"), this.m_FollowSpeed, Infinity, UnityEngine.Time.deltaTime );


                // and update the gameobject itself
                this.transform.localRotation = this.m_OriginalRotation.clone().mul( new pc.Quat().setFromEulerAngles_Unity( -this.m_FollowAngles.x, this.m_FollowAngles.y, 0 ) );
            },
            /*UnityStandardAssets.Cameras.LookatTarget.FollowTarget end.*/


        }
    });
    /*UnityStandardAssets.Cameras.LookatTarget end.*/

    /*UnityStandardAssets.Cameras.TargetFieldOfView start.*/
    Bridge.define("UnityStandardAssets.Cameras.TargetFieldOfView", {
        inherits: [UnityStandardAssets.Cameras.AbstractTargetFollower],
        statics: {
            methods: {
                /*UnityStandardAssets.Cameras.TargetFieldOfView.MaxBoundsExtent:static start.*/
                MaxBoundsExtent: function (obj, includeEffects) {
                    var $t;
                    // get the maximum bounds extent of object, including all child renderers,
                    // but excluding particles and trails, for FOV zooming effect.

                    var renderers = obj.GetComponentsInChildren(UnityEngine.Renderer);

                    var bounds = new pc.BoundingBox.ctor();
                    var initBounds = false;
                    $t = Bridge.getEnumerator(renderers);
                    try {
                        while ($t.moveNext()) {
                            var r = $t.Current;
                            if (!((Bridge.is(r, UnityEngine.TrailRenderer)) || (Bridge.is(r, UnityEngine.ParticleSystemRenderer)))) {
                                if (!initBounds) {
                                    initBounds = true;
                                    bounds = r.bounds;
                                } else {
                                    bounds.add( r.bounds );
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    var max = UnityEngine.Mathf.Max(bounds.halfExtents.x, bounds.halfExtents.y, bounds.halfExtents.z);
                    return max;
                },
                /*UnityStandardAssets.Cameras.TargetFieldOfView.MaxBoundsExtent:static end.*/


            }
        },
        fields: {
            m_FovAdjustTime: 0,
            m_ZoomAmountMultiplier: 0,
            m_IncludeEffectsInSize: false,
            m_BoundSize: 0,
            m_FovAdjustVelocity: 0,
            m_Cam: null,
            m_LastTarget: null
        },
        ctors: {
            init: function () {
                this.m_FovAdjustTime = 1;
                this.m_ZoomAmountMultiplier = 2;
                this.m_IncludeEffectsInSize = false;
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.TargetFieldOfView.Start start.*/
            Start: function () {
                UnityStandardAssets.Cameras.AbstractTargetFollower.prototype.Start.call(this);
                this.m_BoundSize = UnityStandardAssets.Cameras.TargetFieldOfView.MaxBoundsExtent(this.m_Target, this.m_IncludeEffectsInSize);

                // get a reference to the actual camera component:
                this.m_Cam = this.GetComponentInChildren(UnityEngine.Camera);
            },
            /*UnityStandardAssets.Cameras.TargetFieldOfView.Start end.*/

            /*UnityStandardAssets.Cameras.TargetFieldOfView.FollowTarget start.*/
            FollowTarget: function (deltaTime) {
                // calculate the correct field of view to fit the bounds size at the current distance
                var dist = (this.m_Target.position.$clone().sub( this.transform.position )).length();
                var requiredFOV = Math.atan2(this.m_BoundSize, dist) * UnityEngine.Mathf.Rad2Deg * this.m_ZoomAmountMultiplier;

                this.m_Cam.fieldOfView = UnityEngine.Mathf.SmoothDamp(this.m_Cam.fieldOfView, requiredFOV, Bridge.ref(this, "m_FovAdjustVelocity"), this.m_FovAdjustTime);
            },
            /*UnityStandardAssets.Cameras.TargetFieldOfView.FollowTarget end.*/

            /*UnityStandardAssets.Cameras.TargetFieldOfView.SetTarget start.*/
            SetTarget: function (newTransform) {
                UnityStandardAssets.Cameras.AbstractTargetFollower.prototype.SetTarget.call(this, newTransform);
                this.m_BoundSize = UnityStandardAssets.Cameras.TargetFieldOfView.MaxBoundsExtent(newTransform, this.m_IncludeEffectsInSize);
            },
            /*UnityStandardAssets.Cameras.TargetFieldOfView.SetTarget end.*/


        }
    });
    /*UnityStandardAssets.Cameras.TargetFieldOfView end.*/

    /*VariableJoystick start.*/
    Bridge.define("VariableJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            joystickType: 0,
            fixedPosition: null
        },
        props: {
            MoveThreshold: {
                get: function () {
                    return this.moveThreshold;
                },
                set: function (value) {
                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
                this.fixedPosition = new UnityEngine.Vector2();
                this.moveThreshold = 1;
                this.joystickType = JoystickType.Fixed;
                this.fixedPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*VariableJoystick.SetMode start.*/
            SetMode: function (joystickType) {
                this.joystickType = joystickType;
                if (joystickType === JoystickType.Fixed) {
                    this.background.anchoredPosition = this.fixedPosition.$clone();
                    this.background.gameObject.SetActive(true);
                } else {
                    this.background.gameObject.SetActive(false);
                }
            },
            /*VariableJoystick.SetMode end.*/

            /*VariableJoystick.Start start.*/
            Start: function () {
                Joystick.prototype.Start.call(this);
                this.fixedPosition = this.background.anchoredPosition.$clone();
                this.SetMode(this.joystickType);
            },
            /*VariableJoystick.Start end.*/

            /*VariableJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                    this.background.gameObject.SetActive(true);
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.gameObject.SetActive(false);
                }

                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*VariableJoystick.OnPointerUp end.*/

            /*VariableJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
                if (this.joystickType === JoystickType.Dynamic && magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*VariableJoystick.HandleInput end.*/


        }
    });
    /*VariableJoystick end.*/

    /*UnityStandardAssets.Cameras.AutoCam start.*/
    Bridge.define("UnityStandardAssets.Cameras.AutoCam", {
        inherits: [UnityStandardAssets.Cameras.PivotBasedCameraRig],
        fields: {
            m_MoveSpeed: 0,
            m_TurnSpeed: 0,
            m_RollSpeed: 0,
            m_FollowVelocity: false,
            m_FollowTilt: false,
            m_SpinTurnLimit: 0,
            m_TargetVelocityLowerLimit: 0,
            m_SmoothTurnTime: 0,
            m_LastFlatAngle: 0,
            m_CurrentTurnAmount: 0,
            m_TurnSpeedVelocityChange: 0,
            m_RollUp: null
        },
        ctors: {
            init: function () {
                this.m_RollUp = new UnityEngine.Vector3();
                this.m_MoveSpeed = 3;
                this.m_TurnSpeed = 1;
                this.m_RollSpeed = 0.2;
                this.m_FollowVelocity = false;
                this.m_FollowTilt = true;
                this.m_SpinTurnLimit = 90;
                this.m_TargetVelocityLowerLimit = 4.0;
                this.m_SmoothTurnTime = 0.2;
                this.m_RollUp = pc.Vec3.UP.clone();
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.AutoCam.FollowTarget start.*/
            FollowTarget: function (deltaTime) {
                var $t;
                // if no target, or no time passed then we quit early, as there is nothing to do
                if (!(deltaTime > 0) || UnityEngine.Component.op_Equality(this.m_Target, null)) {
                    return;
                }

                // initialise some vars, we'll be modifying these in a moment
                var targetForward = this.m_Target.forward.$clone();
                var targetUp = this.m_Target.up.$clone();

                if (this.m_FollowVelocity && UnityEngine.Application.isPlaying) {
                    // in follow velocity mode, the camera's rotation is aligned towards the object's velocity direction
                    // but only if the object is traveling faster than a given threshold.

                    if (this.targetRigidbody.velocity.length() > this.m_TargetVelocityLowerLimit) {
                        // velocity is high enough, so we'll use the target's velocty
                        targetForward = this.targetRigidbody.velocity.clone().normalize().$clone(); //m_Target.forward; //targetRigidbody.velocity.normalized;
                        targetUp = pc.Vec3.UP.clone();
                    } else {
                        targetUp = pc.Vec3.UP.clone();
                    }
                    this.m_CurrentTurnAmount = UnityEngine.Mathf.SmoothDamp(this.m_CurrentTurnAmount, 1, Bridge.ref(this, "m_TurnSpeedVelocityChange"), this.m_SmoothTurnTime);
                } else {
                    // we're in 'follow rotation' mode, where the camera rig's rotation follows the object's rotation.

                    // This section allows the camera to stop following the target's rotation when the target is spinning too fast.
                    // eg when a car has been knocked into a spin. The camera will resume following the rotation
                    // of the target when the target's angular velocity slows below the threshold.
                    var currentFlatAngle = Math.atan2(targetForward.x, targetForward.z) * UnityEngine.Mathf.Rad2Deg;
                    if (this.m_SpinTurnLimit > 0) {
                        var targetSpinSpeed = Math.abs(UnityEngine.Mathf.DeltaAngle(this.m_LastFlatAngle, currentFlatAngle)) / deltaTime;
                        var desiredTurnAmount = ($t = this.m_SpinTurnLimit * 0.75, ( $t - this.m_SpinTurnLimit ) === 0 ? 0 : ( ((targetSpinSpeed - this.m_SpinTurnLimit) / ($t - this.m_SpinTurnLimit)) ));
                        var turnReactSpeed = (this.m_CurrentTurnAmount > desiredTurnAmount ? 0.1 : 1.0);
                        if (UnityEngine.Application.isPlaying) {
                            this.m_CurrentTurnAmount = UnityEngine.Mathf.SmoothDamp(this.m_CurrentTurnAmount, desiredTurnAmount, Bridge.ref(this, "m_TurnSpeedVelocityChange"), turnReactSpeed);
                        } else {
                            // for editor mode, smoothdamp won't work because it uses deltaTime internally
                            this.m_CurrentTurnAmount = desiredTurnAmount;
                        }
                    } else {
                        this.m_CurrentTurnAmount = 1;
                    }
                    this.m_LastFlatAngle = currentFlatAngle;
                }

                // camera position moves towards target position:
                this.transform.position = new pc.Vec3().lerp( this.transform.position, this.m_Target.position, deltaTime * this.m_MoveSpeed );

                // camera's rotation is split into two parts, which can have independend speed settings:
                // rotating towards the target's forward direction (which encompasses its 'yaw' and 'pitch')
                if (!this.m_FollowTilt) {
                    targetForward.y = 0;
                    if (targetForward.lengthSq() < 1.401298E-45) {
                        targetForward = this.transform.forward.$clone();
                    }
                }
                var rollRotation = new pc.Quat().setLookAt( targetForward, this.m_RollUp );

                // and aligning with the target object's up direction (i.e. its 'roll')
                this.m_RollUp = this.m_RollSpeed > 0 ? new pc.Vec3().slerp( this.m_RollUp, targetUp, this.m_RollSpeed * deltaTime ) : pc.Vec3.UP.clone();
                this.transform.rotation = new pc.Quat().slerp( this.transform.rotation, rollRotation, this.m_TurnSpeed * this.m_CurrentTurnAmount * deltaTime );
            },
            /*UnityStandardAssets.Cameras.AutoCam.FollowTarget end.*/


        }
    });
    /*UnityStandardAssets.Cameras.AutoCam end.*/

    /*UnityStandardAssets.Cameras.FreeLookCam start.*/
    Bridge.define("UnityStandardAssets.Cameras.FreeLookCam", {
        inherits: [UnityStandardAssets.Cameras.PivotBasedCameraRig],
        statics: {
            fields: {
                k_LookDistance: 0
            },
            ctors: {
                init: function () {
                    this.k_LookDistance = 100.0;
                }
            }
        },
        fields: {
            m_MoveSpeed: 0,
            m_TurnSpeed: 0,
            m_TurnSmoothing: 0,
            m_TiltMax: 0,
            m_TiltMin: 0,
            m_LockCursor: false,
            m_VerticalAutoReturn: false,
            m_LookAngle: 0,
            m_TiltAngle: 0,
            m_PivotEulers: null,
            m_PivotTargetRot: null,
            m_TransformTargetRot: null
        },
        ctors: {
            init: function () {
                this.m_PivotEulers = new UnityEngine.Vector3();
                this.m_PivotTargetRot = new UnityEngine.Quaternion();
                this.m_TransformTargetRot = new UnityEngine.Quaternion();
                this.m_MoveSpeed = 1.0;
                this.m_TurnSpeed = 1.5;
                this.m_TurnSmoothing = 0.0;
                this.m_TiltMax = 75.0;
                this.m_TiltMin = 45.0;
                this.m_LockCursor = false;
                this.m_VerticalAutoReturn = false;
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.FreeLookCam.Awake start.*/
            Awake: function () {
                UnityStandardAssets.Cameras.PivotBasedCameraRig.prototype.Awake.call(this);
                // Lock or unlock the cursor.
                UnityEngine.Cursor.lockState = this.m_LockCursor ? UnityEngine.CursorLockMode.Locked : UnityEngine.CursorLockMode.None;
                UnityEngine.Cursor.visible = !this.m_LockCursor;
                this.m_PivotEulers = this.m_Pivot.rotation.getPositiveEulerAngles().$clone();

                this.m_PivotTargetRot = this.m_Pivot.transform.localRotation.$clone();
                this.m_TransformTargetRot = this.transform.localRotation.$clone();
            },
            /*UnityStandardAssets.Cameras.FreeLookCam.Awake end.*/

            /*UnityStandardAssets.Cameras.FreeLookCam.Update start.*/
            Update: function () {
                this.HandleRotationMovement();
                if (this.m_LockCursor && UnityEngine.Input.GetMouseButtonUp(0)) {
                    UnityEngine.Cursor.lockState = this.m_LockCursor ? UnityEngine.CursorLockMode.Locked : UnityEngine.CursorLockMode.None;
                    UnityEngine.Cursor.visible = !this.m_LockCursor;
                }
            },
            /*UnityStandardAssets.Cameras.FreeLookCam.Update end.*/

            /*UnityStandardAssets.Cameras.FreeLookCam.OnDisable start.*/
            OnDisable: function () {
                UnityEngine.Cursor.lockState = UnityEngine.CursorLockMode.None;
                UnityEngine.Cursor.visible = true;
            },
            /*UnityStandardAssets.Cameras.FreeLookCam.OnDisable end.*/

            /*UnityStandardAssets.Cameras.FreeLookCam.FollowTarget start.*/
            FollowTarget: function (deltaTime) {
                if (UnityEngine.Component.op_Equality(this.m_Target, null)) {
                    return;
                }
                // Move the rig towards target position.
                this.transform.position = new pc.Vec3().lerp( this.transform.position, this.m_Target.position, deltaTime * this.m_MoveSpeed );
            },
            /*UnityStandardAssets.Cameras.FreeLookCam.FollowTarget end.*/

            /*UnityStandardAssets.Cameras.FreeLookCam.HandleRotationMovement start.*/
            HandleRotationMovement: function () {
                if (UnityEngine.Time.timeScale < 1.401298E-45) {
                    return;
                }

                // Read the user input
                //var x = CrossPlatformInputManager.GetAxis("Mouse X");
                //var y = CrossPlatformInputManager.GetAxis("Mouse Y");

                // Adjust the look angle by an amount proportional to the turn speed and horizontal input.
                //m_LookAngle += x*m_TurnSpeed;

                // Rotate the rig (the root object) around Y axis only:
                this.m_TransformTargetRot = new pc.Quat().setFromEulerAngles_Unity( 0.0, this.m_LookAngle, 0.0 );

                if (this.m_VerticalAutoReturn) {
                    // For tilt input, we need to behave differently depending on whether we're using mouse or touch input:
                    // on mobile, vertical input is directly mapped to tilt value, so it springs back automatically when the look input is released
                    // we have to test whether above or below zero because we want to auto-return to zero even if min and max are not symmetrical.
                    //m_TiltAngle = y > 0 ? Mathf.Lerp(0, -m_TiltMin, y) : Mathf.Lerp(0, m_TiltMax, -y);
                } else {
                    // on platforms with a mouse, we adjust the current angle based on Y mouse input and turn speed
                    //m_TiltAngle -= y*m_TurnSpeed;
                    // and make sure the new value is within the tilt range
                    this.m_TiltAngle = Math.max(-this.m_TiltMin, Math.min(this.m_TiltAngle, this.m_TiltMax));
                }

                // Tilt input around X is applied to the pivot (the child of this object)
                this.m_PivotTargetRot = new pc.Quat().setFromEulerAngles_Unity( this.m_TiltAngle, this.m_PivotEulers.y, this.m_PivotEulers.z );

                if (this.m_TurnSmoothing > 0) {
                    this.m_Pivot.localRotation = new pc.Quat().slerp( this.m_Pivot.localRotation, this.m_PivotTargetRot, this.m_TurnSmoothing * UnityEngine.Time.deltaTime );
                    this.transform.localRotation = new pc.Quat().slerp( this.transform.localRotation, this.m_TransformTargetRot, this.m_TurnSmoothing * UnityEngine.Time.deltaTime );
                } else {
                    this.m_Pivot.localRotation = this.m_PivotTargetRot.$clone();
                    this.transform.localRotation = this.m_TransformTargetRot.$clone();
                }
            },
            /*UnityStandardAssets.Cameras.FreeLookCam.HandleRotationMovement end.*/


        }
    });
    /*UnityStandardAssets.Cameras.FreeLookCam end.*/

    /*UnityStandardAssets.Cameras.HandHeldCam start.*/
    Bridge.define("UnityStandardAssets.Cameras.HandHeldCam", {
        inherits: [UnityStandardAssets.Cameras.LookatTarget],
        fields: {
            m_SwaySpeed: 0,
            m_BaseSwayAmount: 0,
            m_TrackingSwayAmount: 0,
            m_TrackingBias: 0
        },
        ctors: {
            init: function () {
                this.m_SwaySpeed = 0.5;
                this.m_BaseSwayAmount = 0.5;
                this.m_TrackingSwayAmount = 0.5;
                this.m_TrackingBias = 0;
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.HandHeldCam.FollowTarget start.*/
            FollowTarget: function (deltaTime) {
                UnityStandardAssets.Cameras.LookatTarget.prototype.FollowTarget.call(this, deltaTime);

                var bx = (pc.noise.perlin2(0, UnityEngine.Time.time * this.m_SwaySpeed) - 0.5);
                var by = (pc.noise.perlin2(0, (UnityEngine.Time.time * this.m_SwaySpeed) + 100)) - 0.5;

                bx *= this.m_BaseSwayAmount;
                by *= this.m_BaseSwayAmount;

                var tx = (pc.noise.perlin2(0, UnityEngine.Time.time * this.m_SwaySpeed) - 0.5) + this.m_TrackingBias;
                var ty = ((pc.noise.perlin2(0, (UnityEngine.Time.time * this.m_SwaySpeed) + 100)) - 0.5) + this.m_TrackingBias;

                tx *= -this.m_TrackingSwayAmount * this.m_FollowVelocity.x;
                ty *= this.m_TrackingSwayAmount * this.m_FollowVelocity.y;

                this.transform.Rotate(bx + tx, by + ty, 0);
            },
            /*UnityStandardAssets.Cameras.HandHeldCam.FollowTarget end.*/


        }
    });
    /*UnityStandardAssets.Cameras.HandHeldCam end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.UI","UnityEngine.EventSystems","SWS","System.Collections","UnityEngine.Events","UnityStandardAssets.Vehicles.Car","UnityStandardAssets.Cameras","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","DG.Tweening.Core","System.Globalization","DG.Tweening.Plugins.Options","System.Collections.Generic"];

    /*JoystickPlayerExample start.*/
    $m("JoystickPlayerExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    $m("JoystickSetterExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AxisChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"AxisChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"ModeChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ModeChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SnapX","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapX","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SnapY","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapY","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"axisSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"axisSprites"},{"a":2,"n":"background","t":4,"rt":$n[2].Image,"sn":"background"},{"a":2,"n":"valueText","t":4,"rt":$n[2].Text,"sn":"valueText"},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickSetterExample end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[0].Single,"p":[$n[0].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[0].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[0].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[0].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"SnapX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[0].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[0].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"a":2,"n":"Interactable","t":4,"rt":$n[0].Boolean,"sn":"Interactable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"background","t":4,"rt":$n[1].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[1].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handleRect","t":4,"rt":$n[1].RectTransform,"sn":"handleRect"},{"a":1,"n":"input","t":4,"rt":$n[1].Vector2,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[0].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[0].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"tempInput","t":4,"rt":$n[1].Vector2,"sn":"tempInput"}]}; }, $n);
    /*Joystick end.*/

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[0].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[1].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*CameraInputDemo start.*/
    $m("CameraInputDemo", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnGUI","t":8,"sn":"OnGUI","rt":$n[0].Void},{"a":2,"n":"ShowInformation","t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"ShowInformation","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"infoText","t":4,"rt":$n[0].String,"sn":"infoText"},{"a":1,"n":"myMove","t":4,"rt":$n[4].splineMove,"sn":"myMove"}]}; }, $n);
    /*CameraInputDemo end.*/

    /*EventReceiver start.*/
    $m("EventReceiver", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActivateForTime","t":8,"pi":[{"n":"target","pt":$n[1].Object,"ps":0}],"sn":"ActivateForTime","rt":$n[0].Void,"p":[$n[1].Object]},{"a":1,"n":"ActivateForTimeRoutine","t":8,"pi":[{"n":"target","pt":$n[1].Object,"ps":0}],"sn":"ActivateForTimeRoutine","rt":$n[5].IEnumerator,"p":[$n[1].Object]},{"a":2,"n":"MyMethod","t":8,"sn":"MyMethod","rt":$n[0].Void},{"a":2,"n":"PrintText","t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"PrintText","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"RotateSprite","t":8,"pi":[{"n":"newRot","pt":$n[0].Single,"ps":0}],"sn":"RotateSprite","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetDestination","t":8,"pi":[{"n":"target","pt":$n[1].Object,"ps":0}],"sn":"SetDestination","rt":$n[0].Void,"p":[$n[1].Object]},{"a":1,"n":"SetDestinationRoutine","t":8,"pi":[{"n":"target","pt":$n[1].Object,"ps":0}],"sn":"SetDestinationRoutine","rt":$n[5].IEnumerator,"p":[$n[1].Object]}]}; }, $n);
    /*EventReceiver end.*/

    /*PathInputDemo start.*/
    $m("PathInputDemo", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"a":1,"n":"move","t":4,"rt":$n[4].splineMove,"sn":"move"},{"a":2,"n":"progress","t":4,"rt":$n[0].Single,"sn":"progress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speedMultiplier","t":4,"rt":$n[0].Single,"sn":"speedMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PathInputDemo end.*/

    /*RapidInputDemo start.*/
    $m("RapidInputDemo", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SlowDown","t":8,"sn":"SlowDown","rt":$n[5].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"addSpeed","t":4,"rt":$n[0].Single,"sn":"addSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentSpeed","t":4,"rt":$n[0].Single,"sn":"currentSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxPitch","t":4,"rt":$n[0].Single,"sn":"maxPitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"minPitch","t":4,"rt":$n[0].Single,"sn":"minPitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"move","t":4,"rt":$n[4].splineMove,"sn":"move"},{"a":2,"n":"slowTime","t":4,"rt":$n[0].Single,"sn":"slowTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speedDisplay","t":4,"rt":$n[1].TextMesh,"sn":"speedDisplay"},{"a":1,"n":"timeCounter","t":4,"rt":$n[0].Single,"sn":"timeCounter","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"timeDisplay","t":4,"rt":$n[1].TextMesh,"sn":"timeDisplay"},{"a":2,"n":"topSpeed","t":4,"rt":$n[0].Single,"sn":"topSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RapidInputDemo end.*/

    /*RotationHelper start.*/
    $m("RotationHelper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rotation","t":4,"rt":$n[0].Int32,"sn":"rotation","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*RotationHelper end.*/

    /*RuntimeDemo start.*/
    $m("RuntimeDemo", function () { return {"nested":[RuntimeDemo.ExampleClass1,RuntimeDemo.ExampleClass2,RuntimeDemo.ExampleClass3,RuntimeDemo.ExampleClass4,RuntimeDemo.ExampleClass5,RuntimeDemo.ExampleClass6,RuntimeDemo.ExampleClass7],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DrawExample1","t":8,"sn":"DrawExample1","rt":$n[0].Void},{"a":1,"n":"DrawExample2","t":8,"sn":"DrawExample2","rt":$n[0].Void},{"a":1,"n":"DrawExample3","t":8,"sn":"DrawExample3","rt":$n[0].Void},{"a":1,"n":"DrawExample4","t":8,"sn":"DrawExample4","rt":$n[0].Void},{"a":1,"n":"DrawExample5","t":8,"sn":"DrawExample5","rt":$n[0].Void},{"a":1,"n":"DrawExample6","t":8,"sn":"DrawExample6","rt":$n[0].Void},{"a":1,"n":"DrawExample7","t":8,"sn":"DrawExample7","rt":$n[0].Void},{"a":1,"n":"OnGUI","t":8,"sn":"OnGUI","rt":$n[0].Void},{"a":2,"n":"example1","t":4,"rt":RuntimeDemo.ExampleClass1,"sn":"example1"},{"a":2,"n":"example2","t":4,"rt":RuntimeDemo.ExampleClass2,"sn":"example2"},{"a":2,"n":"example3","t":4,"rt":RuntimeDemo.ExampleClass3,"sn":"example3"},{"a":2,"n":"example4","t":4,"rt":RuntimeDemo.ExampleClass4,"sn":"example4"},{"a":2,"n":"example5","t":4,"rt":RuntimeDemo.ExampleClass5,"sn":"example5"},{"a":2,"n":"example6","t":4,"rt":RuntimeDemo.ExampleClass6,"sn":"example6"},{"a":2,"n":"example7","t":4,"rt":RuntimeDemo.ExampleClass6,"sn":"example7"}]}; }, $n);
    /*RuntimeDemo end.*/

    /*RuntimeDemo+ExampleClass1 start.*/
    $m("RuntimeDemo.ExampleClass1", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"done","t":4,"rt":$n[0].Boolean,"sn":"done","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pathPrefab","t":4,"rt":$n[1].GameObject,"sn":"pathPrefab"},{"a":2,"n":"walkerPrefab","t":4,"rt":$n[1].GameObject,"sn":"walkerPrefab"}]}; }, $n);
    /*RuntimeDemo+ExampleClass1 end.*/

    /*RuntimeDemo+ExampleClass2 start.*/
    $m("RuntimeDemo.ExampleClass2", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"moveRef","t":4,"rt":$n[4].splineMove,"sn":"moveRef"},{"a":2,"n":"pathName1","t":4,"rt":$n[0].String,"sn":"pathName1"},{"a":2,"n":"pathName2","t":4,"rt":$n[0].String,"sn":"pathName2"}]}; }, $n);
    /*RuntimeDemo+ExampleClass2 end.*/

    /*RuntimeDemo+ExampleClass3 start.*/
    $m("RuntimeDemo.ExampleClass3", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"moveRef","t":4,"rt":$n[4].splineMove,"sn":"moveRef"}]}; }, $n);
    /*RuntimeDemo+ExampleClass3 end.*/

    /*RuntimeDemo+ExampleClass4 start.*/
    $m("RuntimeDemo.ExampleClass4", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"moveRef","t":4,"rt":$n[4].splineMove,"sn":"moveRef"}]}; }, $n);
    /*RuntimeDemo+ExampleClass4 end.*/

    /*RuntimeDemo+ExampleClass5 start.*/
    $m("RuntimeDemo.ExampleClass5", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"moveRef","t":4,"rt":$n[4].splineMove,"sn":"moveRef"}]}; }, $n);
    /*RuntimeDemo+ExampleClass5 end.*/

    /*RuntimeDemo+ExampleClass6 start.*/
    $m("RuntimeDemo.ExampleClass6", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"done","t":4,"rt":$n[0].Boolean,"sn":"done","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"moveRef","t":4,"rt":$n[4].splineMove,"sn":"moveRef"},{"a":2,"n":"target","t":4,"rt":$n[1].GameObject,"sn":"target"}]}; }, $n);
    /*RuntimeDemo+ExampleClass6 end.*/

    /*RuntimeDemo+ExampleClass7 start.*/
    $m("RuntimeDemo.ExampleClass7", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"done","t":4,"rt":$n[0].Boolean,"sn":"done","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*RuntimeDemo+ExampleClass7 end.*/

    /*BlobShadowMovement start.*/
    $m("BlobShadowMovement", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Offset","t":4,"rt":$n[1].Vector3,"sn":"Offset"},{"a":2,"n":"Target","t":4,"rt":$n[1].Transform,"sn":"Target"},{"a":1,"n":"_Position","t":4,"rt":$n[1].Vector3,"sn":"_Position"}]}; }, $n);
    /*BlobShadowMovement end.*/

    /*Bot start.*/
    $m("Bot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"StartMove","t":8,"sn":"StartMove","rt":$n[0].Void},{"a":2,"n":"StopMove","t":8,"sn":"StopMove","rt":$n[0].Void},{"a":2,"n":"BotWheels","t":4,"rt":BotWheels,"sn":"BotWheels"},{"a":2,"n":"RaceCar","t":4,"rt":RaceCar,"sn":"RaceCar"},{"a":2,"n":"SplineMove","t":4,"rt":$n[4].splineMove,"sn":"SplineMove"}]}; }, $n);
    /*Bot end.*/

    /*BotWheels start.*/
    $m("BotWheels", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"IsRotating","t":4,"rt":$n[0].Boolean,"sn":"IsRotating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"RotationSpeed","t":4,"rt":$n[0].Single,"sn":"RotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Wheels","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"Wheels"}]}; }, $n);
    /*BotWheels end.*/

    /*CameraFollower start.*/
    $m("CameraFollower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"CameraSpeed","t":4,"rt":$n[0].Single,"sn":"CameraSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PositionOffset","t":4,"rt":$n[1].Vector3,"sn":"PositionOffset"},{"a":2,"n":"RotationOffset","t":4,"rt":$n[1].Vector3,"sn":"RotationOffset"},{"a":2,"n":"Target","t":4,"rt":$n[1].Transform,"sn":"Target"}]}; }, $n);
    /*CameraFollower end.*/

    /*CarTrigger start.*/
    $m("CarTrigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"OnTriggerEnterEvent","t":4,"rt":$n[6].UnityEvent,"sn":"OnTriggerEnterEvent"},{"a":2,"n":"OnTriggerExitEvent","t":4,"rt":$n[6].UnityEvent,"sn":"OnTriggerExitEvent"},{"a":2,"n":"OnTriggerStayEvent","t":4,"rt":$n[6].UnityEvent,"sn":"OnTriggerStayEvent"}]}; }, $n);
    /*CarTrigger end.*/

    /*Checkpoint start.*/
    $m("Checkpoint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"OnCheckpointPassed","is":true,"t":4,"rt":Function,"sn":"OnCheckpointPassed"},{"a":1,"n":"_Passed","t":4,"rt":$n[0].Boolean,"sn":"_Passed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Checkpoint end.*/

    /*FinishTrigger start.*/
    $m("FinishTrigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"_IsPassed","t":4,"rt":$n[0].Boolean,"sn":"_IsPassed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_LevelWon","t":4,"rt":$n[0].Boolean,"sn":"_LevelWon","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_LossScreen","t":4,"rt":$n[1].CanvasGroup,"sn":"_LossScreen"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_MainScreen","t":4,"rt":$n[1].CanvasGroup,"sn":"_MainScreen"},{"a":1,"n":"_Opponent","t":4,"rt":Bot,"sn":"_Opponent"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_WinScren","t":4,"rt":$n[1].CanvasGroup,"sn":"_WinScren"}]}; }, $n);
    /*FinishTrigger end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCountdownEndedHandler","t":8,"sn":"OnCountdownEndedHandler","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnEndTutorialHandler","t":8,"sn":"OnEndTutorialHandler","rt":$n[0].Void},{"a":1,"n":"PauseGameplay","t":8,"sn":"PauseGameplay","rt":$n[0].Void},{"a":2,"n":"ReloadScene","t":8,"sn":"ReloadScene","rt":$n[0].Void},{"a":1,"n":"ResumeGameplay","t":8,"sn":"ResumeGameplay","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":1,"n":"UpdatePositions","t":8,"sn":"UpdatePositions","rt":$n[0].Void},{"a":1,"n":"WheatCull","t":8,"sn":"WheatCull","rt":$n[0].Void},{"a":2,"n":"CarUserControl","t":4,"rt":CarUserControl,"sn":"CarUserControl"},{"at":[new UnityEngine.HeaderAttribute("UI")],"a":2,"n":"CountdownWidget","t":4,"rt":Countdown,"sn":"CountdownWidget"},{"a":2,"n":"GasButton","t":4,"rt":ButtonInput,"sn":"GasButton"},{"a":2,"n":"Joystick","t":4,"rt":Joystick,"sn":"Joystick"},{"a":2,"n":"JoystickTutorialButton","t":4,"rt":ButtonInput,"sn":"JoystickTutorialButton"},{"a":2,"n":"LandscapeFov","t":4,"rt":$n[0].Single,"sn":"LandscapeFov","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"LastCheckpoint","t":4,"rt":$n[1].Transform,"sn":"LastCheckpoint"},{"a":2,"n":"MainBackroundImage","t":4,"rt":$n[2].Image,"sn":"MainBackroundImage"},{"at":[new UnityEngine.HeaderAttribute("Camera")],"a":2,"n":"MainCamera","t":4,"rt":$n[1].Camera,"sn":"MainCamera"},{"a":2,"n":"Opponents","t":4,"rt":System.Array.type(Bot),"sn":"Opponents"},{"at":[new UnityEngine.HeaderAttribute("Positions")],"a":2,"n":"PlayerCar","t":4,"rt":RaceCar,"sn":"PlayerCar"},{"a":2,"n":"PortraitFov","t":4,"rt":$n[0].Single,"sn":"PortraitFov","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Position","t":4,"rt":$n[0].Int32,"sn":"Position","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TutorialWindow","t":4,"rt":$n[1].CanvasGroup,"sn":"TutorialWindow"},{"a":2,"n":"WheatCullDistance","t":4,"rt":$n[0].Single,"sn":"WheatCullDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_OpponentDistance","t":4,"rt":$n[0].Single,"sn":"_OpponentDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_PlayerDistance","t":4,"rt":$n[0].Single,"sn":"_PlayerDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_Wheat","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_Wheat"},{"at":[new UnityEngine.HeaderAttribute("Wheat"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_WheatCullDistance","t":4,"rt":$n[0].Single,"sn":"_WheatCullDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*GameManager end.*/

    /*RaceCar start.*/
    $m("RaceCar", function () { return {"nested":[RaceCar.OwnerType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"OnWheatCollected","t":4,"rt":Function,"sn":"OnWheatCollected"},{"a":2,"n":"Owner","t":4,"rt":RaceCar.OwnerType,"sn":"Owner","box":function ($v) { return Bridge.box($v, RaceCar.OwnerType, System.Enum.toStringFn(RaceCar.OwnerType));}},{"a":2,"n":"Score","t":4,"rt":$n[0].Int32,"sn":"Score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Wheat","t":4,"rt":$n[0].Int32,"sn":"Wheat","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*RaceCar end.*/

    /*RaceCar+OwnerType start.*/
    $m("RaceCar.OwnerType", function () { return {"td":RaceCar,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OPPONENT","is":true,"t":4,"rt":RaceCar.OwnerType,"sn":"OPPONENT","box":function ($v) { return Bridge.box($v, RaceCar.OwnerType, System.Enum.toStringFn(RaceCar.OwnerType));}},{"a":2,"n":"PLAYER","is":true,"t":4,"rt":RaceCar.OwnerType,"sn":"PLAYER","box":function ($v) { return Bridge.box($v, RaceCar.OwnerType, System.Enum.toStringFn(RaceCar.OwnerType));}}]}; }, $n);
    /*RaceCar+OwnerType end.*/

    /*Trigger start.*/
    $m("Trigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"OnTriggerEnterEvent","t":4,"rt":$n[6].UnityEvent,"sn":"OnTriggerEnterEvent"},{"a":2,"n":"OnTriggerExitEvent","t":4,"rt":$n[6].UnityEvent,"sn":"OnTriggerExitEvent"},{"a":2,"n":"OnTriggerStayEvent","t":4,"rt":$n[6].UnityEvent,"sn":"OnTriggerStayEvent"}]}; }, $n);
    /*Trigger end.*/

    /*ButtonInput start.*/
    $m("ButtonInput", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.RectTransform)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"IsInteractable","t":4,"rt":$n[0].Boolean,"sn":"IsInteractable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnPointerDownEvent","t":4,"rt":Function,"sn":"OnPointerDownEvent"},{"a":2,"n":"OnPointerUpEvent","t":4,"rt":Function,"sn":"OnPointerUpEvent"},{"a":1,"n":"_RectTransform","t":4,"rt":$n[1].RectTransform,"sn":"_RectTransform"}]}; }, $n);
    /*ButtonInput end.*/

    /*Countdown start.*/
    $m("Countdown", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartCountdown","t":8,"pi":[{"n":"onCountdownEnded","pt":Function,"ps":0}],"sn":"StartCountdown","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"CountdownText","t":4,"rt":$n[2].Text,"sn":"CountdownText"},{"a":2,"n":"Go_Image","t":4,"rt":$n[1].CanvasGroup,"sn":"Go_Image"},{"a":2,"n":"MainWindow","t":4,"rt":$n[1].CanvasGroup,"sn":"MainWindow"},{"a":2,"n":"Outline","t":4,"rt":$n[2].Outline,"sn":"Outline"}]}; }, $n);
    /*Countdown end.*/

    /*EndGameButton start.*/
    $m("EndGameButton", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.UI.Button)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"_Button","t":4,"rt":$n[2].Button,"sn":"_Button"}]}; }, $n);
    /*EndGameButton end.*/

    /*LunaUIFields start.*/
    $m("LunaUIFields", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Gas hint text", 0, "UI", false)],"a":2,"n":"GasHintString","t":4,"rt":$n[0].String,"sn":"GasHintString"},{"at":[new UnityEngine.HeaderAttribute("Tutorial")],"a":2,"n":"GasHintText","t":4,"rt":$n[2].Text,"sn":"GasHintText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Level complete text", 4, "UI", false)],"a":2,"n":"LevelCompleteButtonString","t":4,"rt":$n[0].String,"sn":"LevelCompleteButtonString"},{"at":[new UnityEngine.HeaderAttribute("End Card")],"a":2,"n":"LevelCompleteButtonText","t":4,"rt":$n[2].Text,"sn":"LevelCompleteButtonText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Level failed button text", 3, "UI", false)],"a":2,"n":"LevelFailedButtonString","t":4,"rt":$n[0].String,"sn":"LevelFailedButtonString"},{"at":[new UnityEngine.HeaderAttribute("End Card")],"a":2,"n":"LevelFailedButtonText","t":4,"rt":$n[2].Text,"sn":"LevelFailedButtonText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Objective text", 2, "UI", false)],"a":2,"n":"ObjectiveHintString","t":4,"rt":$n[0].String,"sn":"ObjectiveHintString"},{"a":2,"n":"ObjectiveHintText","t":4,"rt":$n[2].Text,"sn":"ObjectiveHintText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Steer hint text", 1, "UI", false)],"a":2,"n":"SteerHintString","t":4,"rt":$n[0].String,"sn":"SteerHintString"},{"a":2,"n":"SteerHintText","t":4,"rt":$n[2].Text,"sn":"SteerHintText"}]}; }, $n);
    /*LunaUIFields end.*/

    /*PositionWidget start.*/
    $m("PositionWidget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateImage","t":8,"sn":"UpdateImage","rt":$n[0].Void},{"a":2,"n":"GameManager","t":4,"rt":GameManager,"sn":"GameManager"},{"a":2,"n":"Image","t":4,"rt":$n[2].Image,"sn":"Image"},{"a":2,"n":"Numbers","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"Numbers"},{"a":1,"n":"_LastPosition","t":4,"rt":$n[0].Int32,"sn":"_LastPosition","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*PositionWidget end.*/

    /*TimeSinceStartup start.*/
    $m("TimeSinceStartup", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Text","t":4,"rt":$n[2].Text,"sn":"Text"}]}; }, $n);
    /*TimeSinceStartup end.*/

    /*WheatSliderWidget start.*/
    $m("WheatSliderWidget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnWheatCollectedHandler","t":8,"sn":"OnWheatCollectedHandler","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"BarIconImage","t":4,"rt":$n[2].Image,"sn":"BarIconImage"},{"a":2,"n":"MaxWheat","t":4,"rt":$n[0].Int32,"sn":"MaxWheat","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RaceCar","t":4,"rt":RaceCar,"sn":"RaceCar"},{"a":2,"n":"Slider","t":4,"rt":$n[2].Slider,"sn":"Slider"},{"a":2,"n":"WheatImage","t":4,"rt":$n[2].Image,"sn":"WheatImage"},{"a":1,"n":"_ImageSourcePosition","t":4,"rt":$n[1].Vector3,"sn":"_ImageSourcePosition"},{"a":1,"n":"_IsAnimationCompleted","t":4,"rt":$n[0].Boolean,"sn":"_IsAnimationCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*WheatSliderWidget end.*/

    /*WinScreenWidget start.*/
    $m("WinScreenWidget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"RaceCar","t":4,"rt":RaceCar,"sn":"RaceCar"},{"a":2,"n":"WheatMultiplier","t":4,"rt":$n[0].Int32,"sn":"WheatMultiplier","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"WheatText","t":4,"rt":$n[2].Text,"sn":"WheatText"}]}; }, $n);
    /*WinScreenWidget end.*/

    /*CarDriveType start.*/
    $m("CarDriveType", function () { return {"att":256,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FourWheelDrive","is":true,"t":4,"rt":CarDriveType,"sn":"FourWheelDrive","box":function ($v) { return Bridge.box($v, CarDriveType, System.Enum.toStringFn(CarDriveType));}},{"a":2,"n":"FrontWheelDrive","is":true,"t":4,"rt":CarDriveType,"sn":"FrontWheelDrive","box":function ($v) { return Bridge.box($v, CarDriveType, System.Enum.toStringFn(CarDriveType));}},{"a":2,"n":"RearWheelDrive","is":true,"t":4,"rt":CarDriveType,"sn":"RearWheelDrive","box":function ($v) { return Bridge.box($v, CarDriveType, System.Enum.toStringFn(CarDriveType));}}]}; }, $n);
    /*CarDriveType end.*/

    /*SpeedType start.*/
    $m("SpeedType", function () { return {"att":256,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"KPH","is":true,"t":4,"rt":SpeedType,"sn":"KPH","box":function ($v) { return Bridge.box($v, SpeedType, System.Enum.toStringFn(SpeedType));}},{"a":2,"n":"MPH","is":true,"t":4,"rt":SpeedType,"sn":"MPH","box":function ($v) { return Bridge.box($v, SpeedType, System.Enum.toStringFn(SpeedType));}}]}; }, $n);
    /*SpeedType end.*/

    /*CarController start.*/
    $m("CarController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddDownForce","t":8,"sn":"AddDownForce","rt":$n[0].Void},{"a":1,"n":"AdjustTorque","t":8,"pi":[{"n":"forwardSlip","pt":$n[0].Single,"ps":0}],"sn":"AdjustTorque","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"AnySkidSoundPlaying","t":8,"sn":"AnySkidSoundPlaying","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ApplyDrive","t":8,"pi":[{"n":"accel","pt":$n[0].Single,"ps":0},{"n":"footbrake","pt":$n[0].Single,"ps":1}],"sn":"ApplyDrive","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"CalculateGearFactor","t":8,"sn":"CalculateGearFactor","rt":$n[0].Void},{"a":1,"n":"CalculateRevs","t":8,"sn":"CalculateRevs","rt":$n[0].Void},{"a":1,"n":"CapSpeed","t":8,"sn":"CapSpeed","rt":$n[0].Void},{"a":1,"n":"CheckForWheelSpin","t":8,"sn":"CheckForWheelSpin","rt":$n[0].Void},{"a":1,"n":"CurveFactor","is":true,"t":8,"pi":[{"n":"factor","pt":$n[0].Single,"ps":0}],"sn":"CurveFactor","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GearChanging","t":8,"sn":"GearChanging","rt":$n[0].Void},{"a":2,"n":"Move","t":8,"pi":[{"n":"steering","pt":$n[0].Single,"ps":0},{"n":"accel","pt":$n[0].Single,"ps":1},{"n":"footbrake","pt":$n[0].Single,"ps":2},{"n":"handbrake","pt":$n[0].Single,"ps":3}],"sn":"Move","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"RemoveBrakeTorque","t":8,"sn":"RemoveBrakeTorque","rt":$n[0].Void},{"a":2,"n":"RemoveTorque","t":8,"sn":"RemoveTorque","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"SteerHelper","t":8,"sn":"SteerHelper","rt":$n[0].Void},{"a":1,"n":"TractionControl","t":8,"sn":"TractionControl","rt":$n[0].Void},{"a":1,"n":"ULerp","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"value","pt":$n[0].Single,"ps":2}],"sn":"ULerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"AccelInput","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_AccelInput","t":8,"rt":$n[0].Single,"fg":"AccelInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_AccelInput","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"AccelInput"},"fn":"AccelInput"},{"a":2,"n":"BrakeInput","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_BrakeInput","t":8,"rt":$n[0].Single,"fg":"BrakeInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_BrakeInput","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"BrakeInput"},"fn":"BrakeInput"},{"a":2,"n":"CurrentSpeed","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_CurrentSpeed","t":8,"rt":$n[0].Single,"fg":"CurrentSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"CurrentSpeed"},{"a":2,"n":"CurrentSteerAngle","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_CurrentSteerAngle","t":8,"rt":$n[0].Single,"fg":"CurrentSteerAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"CurrentSteerAngle"},{"a":2,"n":"GearNum","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_GearNum","t":8,"rt":$n[0].Int32,"fg":"GearNum","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_GearNum","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"GearNum"},"fn":"GearNum"},{"a":2,"n":"MaxSpeed","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MaxSpeed","t":8,"rt":$n[0].Single,"fg":"MaxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"MaxSpeed"},{"a":2,"n":"Revs","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Revs","t":8,"rt":$n[0].Single,"fg":"Revs","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_Revs","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"Revs"},"fn":"Revs"},{"a":2,"n":"Skidding","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Skidding","t":8,"rt":$n[0].Boolean,"fg":"Skidding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Skidding","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Skidding"},"fn":"Skidding"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"NoOfGears","is":true,"t":4,"rt":$n[0].Int32,"sn":"NoOfGears","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Torque multiplier", 2, "Controls", false)],"a":2,"n":"TorqueMultiplier","t":4,"rt":$n[0].Single,"sn":"TorqueMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"k_ReversingThreshold","is":true,"t":4,"rt":$n[0].Single,"sn":"k_ReversingThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_BrakeTorque","t":4,"rt":$n[0].Single,"sn":"m_BrakeTorque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_CarDriveType","t":4,"rt":CarDriveType,"sn":"m_CarDriveType","box":function ($v) { return Bridge.box($v, CarDriveType, System.Enum.toStringFn(CarDriveType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_CentreOfMassOffset","t":4,"rt":$n[1].Vector3,"sn":"m_CentreOfMassOffset"},{"a":1,"n":"m_CurrentTorque","t":4,"rt":$n[0].Single,"sn":"m_CurrentTorque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_Downforce","t":4,"rt":$n[0].Single,"sn":"m_Downforce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Full torque over all wheels", 1, "Controls", false),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_FullTorqueOverAllWheels","t":4,"rt":$n[0].Single,"sn":"m_FullTorqueOverAllWheels","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_GearFactor","t":4,"rt":$n[0].Single,"sn":"m_GearFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_GearNum","t":4,"rt":$n[0].Int32,"sn":"m_GearNum","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_MaxHandbrakeTorque","t":4,"rt":$n[0].Single,"sn":"m_MaxHandbrakeTorque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Max steer angle", 0, "Controls", false),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_MaximumSteerAngle","t":4,"rt":$n[0].Single,"sn":"m_MaximumSteerAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_OldRotation","t":4,"rt":$n[0].Single,"sn":"m_OldRotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_Pos","t":4,"rt":$n[1].Vector3,"sn":"m_Pos"},{"a":1,"n":"m_Prevpos","t":4,"rt":$n[1].Vector3,"sn":"m_Prevpos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_RevRangeBoundary","t":4,"rt":$n[0].Single,"sn":"m_RevRangeBoundary","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_ReverseTorque","t":4,"rt":$n[0].Single,"sn":"m_ReverseTorque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_Rigidbody","t":4,"rt":$n[1].Rigidbody,"sn":"m_Rigidbody"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SlipLimit","t":4,"rt":$n[0].Single,"sn":"m_SlipLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SpeedType","t":4,"rt":SpeedType,"sn":"m_SpeedType","box":function ($v) { return Bridge.box($v, SpeedType, System.Enum.toStringFn(SpeedType));}},{"a":1,"n":"m_SteerAngle","t":4,"rt":$n[0].Single,"sn":"m_SteerAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SteerHelper","t":4,"rt":$n[0].Single,"sn":"m_SteerHelper","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Top speed", 3, "Controls", false),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_Topspeed","t":4,"rt":$n[0].Single,"sn":"m_Topspeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TractionControl","t":4,"rt":$n[0].Single,"sn":"m_TractionControl","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"m_WheelColliders","t":4,"rt":System.Array.type(UnityEngine.WheelCollider),"sn":"m_WheelColliders"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_WheelEffects","t":4,"rt":System.Array.type(WheelEffects),"sn":"m_WheelEffects"},{"a":1,"n":"m_WheelMeshLocalRotations","t":4,"rt":System.Array.type(UnityEngine.Quaternion),"sn":"m_WheelMeshLocalRotations"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_WheelMeshes","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"m_WheelMeshes"},{"a":1,"backing":true,"n":"<AccelInput>k__BackingField","t":4,"rt":$n[0].Single,"sn":"AccelInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<BrakeInput>k__BackingField","t":4,"rt":$n[0].Single,"sn":"BrakeInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Revs>k__BackingField","t":4,"rt":$n[0].Single,"sn":"Revs","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Skidding>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"Skidding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CarController end.*/

    /*CarUserControl start.*/
    $m("CarUserControl", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(CarController)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActivateHandbrake","t":8,"sn":"ActivateHandbrake","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"DeactivateHandbrake","t":8,"sn":"DeactivateHandbrake","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"OnPointerDownHandler","t":8,"sn":"OnPointerDownHandler","rt":$n[0].Void},{"a":1,"n":"OnPointerUpHandler","t":8,"sn":"OnPointerUpHandler","rt":$n[0].Void},{"a":2,"n":"CanMove","t":4,"rt":$n[0].Boolean,"sn":"CanMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_GasButton","t":4,"rt":ButtonInput,"sn":"_GasButton"},{"a":1,"n":"_GasInput","t":4,"rt":$n[0].Single,"sn":"_GasInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_Handbrake","t":4,"rt":$n[0].Boolean,"sn":"_Handbrake","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_Joystick","t":4,"rt":VariableJoystick,"sn":"_Joystick"},{"a":1,"n":"m_Car","t":4,"rt":CarController,"sn":"m_Car"}]}; }, $n);
    /*CarUserControl end.*/

    /*WheelEffects start.*/
    $m("WheelEffects", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.AudioSource)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"EmitTyreSmoke","t":8,"sn":"EmitTyreSmoke","rt":$n[0].Void},{"a":2,"n":"EndSkidTrail","t":8,"sn":"EndSkidTrail","rt":$n[0].Void},{"a":2,"n":"PlayAudio","t":8,"sn":"PlayAudio","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartSkidTrail","t":8,"sn":"StartSkidTrail","rt":$n[5].IEnumerator},{"a":2,"n":"StopAudio","t":8,"sn":"StopAudio","rt":$n[0].Void},{"a":2,"n":"PlayingAudio","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_PlayingAudio","t":8,"rt":$n[0].Boolean,"fg":"PlayingAudio","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_PlayingAudio","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"PlayingAudio"},"fn":"PlayingAudio"},{"a":2,"n":"skidding","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_skidding","t":8,"rt":$n[0].Boolean,"fg":"skidding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_skidding","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"skidding"},"fn":"skidding"},{"a":2,"n":"SkidTrailPrefab","t":4,"rt":$n[1].Transform,"sn":"SkidTrailPrefab"},{"a":1,"n":"m_AudioSource","t":4,"rt":$n[1].AudioSource,"sn":"m_AudioSource"},{"a":1,"n":"m_SkidTrail","t":4,"rt":$n[1].Transform,"sn":"m_SkidTrail"},{"a":1,"n":"m_WheelCollider","t":4,"rt":$n[1].WheelCollider,"sn":"m_WheelCollider"},{"a":2,"n":"skidParticles","t":4,"rt":$n[1].ParticleSystem,"sn":"skidParticles"},{"a":2,"n":"skidTrailsDetachedParent","is":true,"t":4,"rt":$n[1].Transform,"sn":"skidTrailsDetachedParent"},{"a":1,"backing":true,"n":"<PlayingAudio>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"PlayingAudio","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<skidding>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"skidding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*WheelEffects end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*UnityStandardAssets.Vehicles.Car.CarAudio start.*/
    $m("UnityStandardAssets.Vehicles.Car.CarAudio", function () { return {"nested":[$n[7].CarAudio.EngineAudioOptions],"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(CarController)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SetUpEngineAudioSource","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0}],"sn":"SetUpEngineAudioSource","rt":$n[1].AudioSource,"p":[$n[1].AudioClip]},{"a":1,"n":"StartSound","t":8,"sn":"StartSound","rt":$n[0].Void},{"a":1,"n":"StopSound","t":8,"sn":"StopSound","rt":$n[0].Void},{"a":1,"n":"ULerp","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"value","pt":$n[0].Single,"ps":2}],"sn":"ULerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"dopplerLevel","t":4,"rt":$n[0].Single,"sn":"dopplerLevel","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"engineSoundStyle","t":4,"rt":$n[7].CarAudio.EngineAudioOptions,"sn":"engineSoundStyle","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions, System.Enum.toStringFn(UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions));}},{"a":2,"n":"highAccelClip","t":4,"rt":$n[1].AudioClip,"sn":"highAccelClip"},{"a":2,"n":"highDecelClip","t":4,"rt":$n[1].AudioClip,"sn":"highDecelClip"},{"a":2,"n":"highPitchMultiplier","t":4,"rt":$n[0].Single,"sn":"highPitchMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"lowAccelClip","t":4,"rt":$n[1].AudioClip,"sn":"lowAccelClip"},{"a":2,"n":"lowDecelClip","t":4,"rt":$n[1].AudioClip,"sn":"lowDecelClip"},{"a":2,"n":"lowPitchMax","t":4,"rt":$n[0].Single,"sn":"lowPitchMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"lowPitchMin","t":4,"rt":$n[0].Single,"sn":"lowPitchMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_CarController","t":4,"rt":CarController,"sn":"m_CarController"},{"a":1,"n":"m_HighAccel","t":4,"rt":$n[1].AudioSource,"sn":"m_HighAccel"},{"a":1,"n":"m_HighDecel","t":4,"rt":$n[1].AudioSource,"sn":"m_HighDecel"},{"a":1,"n":"m_LowAccel","t":4,"rt":$n[1].AudioSource,"sn":"m_LowAccel"},{"a":1,"n":"m_LowDecel","t":4,"rt":$n[1].AudioSource,"sn":"m_LowDecel"},{"a":1,"n":"m_StartedSound","t":4,"rt":$n[0].Boolean,"sn":"m_StartedSound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"maxRolloffDistance","t":4,"rt":$n[0].Single,"sn":"maxRolloffDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pitchMultiplier","t":4,"rt":$n[0].Single,"sn":"pitchMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UnityStandardAssets.Vehicles.Car.CarAudio end.*/

    /*UnityStandardAssets.Vehicles.Car.CarAudio+EngineAudioOptions start.*/
    $m("UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions", function () { return {"td":$n[7].CarAudio,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FourChannel","is":true,"t":4,"rt":$n[7].CarAudio.EngineAudioOptions,"sn":"FourChannel","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions, System.Enum.toStringFn(UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions));}},{"a":2,"n":"Simple","is":true,"t":4,"rt":$n[7].CarAudio.EngineAudioOptions,"sn":"Simple","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions, System.Enum.toStringFn(UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions));}}]}; }, $n);
    /*UnityStandardAssets.Vehicles.Car.CarAudio+EngineAudioOptions end.*/

    /*UnityStandardAssets.Vehicles.Car.SkidTrail start.*/
    $m("UnityStandardAssets.Vehicles.Car.SkidTrail", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[5].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_PersistTime","t":4,"rt":$n[0].Single,"sn":"m_PersistTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UnityStandardAssets.Vehicles.Car.SkidTrail end.*/

    /*UnityStandardAssets.Vehicles.Car.Suspension start.*/
    $m("UnityStandardAssets.Vehicles.Car.Suspension", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"m_Origin","t":4,"rt":$n[1].Vector3,"sn":"m_Origin"},{"a":1,"n":"m_TargetOriginalPosition","t":4,"rt":$n[1].Vector3,"sn":"m_TargetOriginalPosition"},{"a":2,"n":"wheel","t":4,"rt":$n[1].GameObject,"sn":"wheel"}]}; }, $n);
    /*UnityStandardAssets.Vehicles.Car.Suspension end.*/

    /*UnityStandardAssets.Cameras.AbstractTargetFollower start.*/
    $m("UnityStandardAssets.Cameras.AbstractTargetFollower", function () { return {"nested":[$n[8].AbstractTargetFollower.UpdateType],"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FindAndTargetPlayer","t":8,"sn":"FindAndTargetPlayer","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"ab":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"ManualUpdate","t":8,"sn":"ManualUpdate","rt":$n[0].Void},{"v":true,"a":2,"n":"SetTarget","t":8,"pi":[{"n":"newTransform","pt":$n[1].Transform,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[$n[1].Transform]},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Target","t":16,"rt":$n[1].Transform,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[1].Transform,"fg":"Target"},"fn":"Target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_AutoTargetPlayer","t":4,"rt":$n[0].Boolean,"sn":"m_AutoTargetPlayer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"m_Target","t":4,"rt":$n[1].Transform,"sn":"m_Target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_UpdateType","t":4,"rt":$n[8].AbstractTargetFollower.UpdateType,"sn":"m_UpdateType","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType, System.Enum.toStringFn(UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType));}},{"a":3,"n":"targetRigidbody","t":4,"rt":$n[1].Rigidbody,"sn":"targetRigidbody"}]}; }, $n);
    /*UnityStandardAssets.Cameras.AbstractTargetFollower end.*/

    /*UnityStandardAssets.Cameras.AbstractTargetFollower+UpdateType start.*/
    $m("UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType", function () { return {"td":$n[8].AbstractTargetFollower,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","is":true,"t":4,"rt":$n[8].AbstractTargetFollower.UpdateType,"sn":"FixedUpdate","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType, System.Enum.toStringFn(UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType));}},{"a":2,"n":"LateUpdate","is":true,"t":4,"rt":$n[8].AbstractTargetFollower.UpdateType,"sn":"LateUpdate","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType, System.Enum.toStringFn(UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType));}},{"a":2,"n":"ManualUpdate","is":true,"t":4,"rt":$n[8].AbstractTargetFollower.UpdateType,"sn":"ManualUpdate","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType, System.Enum.toStringFn(UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType));}}]}; }, $n);
    /*UnityStandardAssets.Cameras.AbstractTargetFollower+UpdateType end.*/

    /*UnityStandardAssets.Cameras.AutoCam start.*/
    $m("UnityStandardAssets.Cameras.AutoCam", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"m_CurrentTurnAmount","t":4,"rt":$n[0].Single,"sn":"m_CurrentTurnAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_FollowTilt","t":4,"rt":$n[0].Boolean,"sn":"m_FollowTilt","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_FollowVelocity","t":4,"rt":$n[0].Boolean,"sn":"m_FollowVelocity","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"m_LastFlatAngle","t":4,"rt":$n[0].Single,"sn":"m_LastFlatAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_MoveSpeed","t":4,"rt":$n[0].Single,"sn":"m_MoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_RollSpeed","t":4,"rt":$n[0].Single,"sn":"m_RollSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_RollUp","t":4,"rt":$n[1].Vector3,"sn":"m_RollUp"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SmoothTurnTime","t":4,"rt":$n[0].Single,"sn":"m_SmoothTurnTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SpinTurnLimit","t":4,"rt":$n[0].Single,"sn":"m_SpinTurnLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TargetVelocityLowerLimit","t":4,"rt":$n[0].Single,"sn":"m_TargetVelocityLowerLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TurnSpeed","t":4,"rt":$n[0].Single,"sn":"m_TurnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_TurnSpeedVelocityChange","t":4,"rt":$n[0].Single,"sn":"m_TurnSpeedVelocityChange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UnityStandardAssets.Cameras.AutoCam end.*/

    /*UnityStandardAssets.Cameras.FreeLookCam start.*/
    $m("UnityStandardAssets.Cameras.FreeLookCam", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"ov":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"HandleRotationMovement","t":8,"sn":"HandleRotationMovement","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":3,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"k_LookDistance","is":true,"t":4,"rt":$n[0].Single,"sn":"k_LookDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_LockCursor","t":4,"rt":$n[0].Boolean,"sn":"m_LockCursor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"m_LookAngle","t":4,"rt":$n[0].Single,"sn":"m_LookAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_MoveSpeed","t":4,"rt":$n[0].Single,"sn":"m_MoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_PivotEulers","t":4,"rt":$n[1].Vector3,"sn":"m_PivotEulers"},{"a":1,"n":"m_PivotTargetRot","t":4,"rt":$n[1].Quaternion,"sn":"m_PivotTargetRot"},{"a":1,"n":"m_TiltAngle","t":4,"rt":$n[0].Single,"sn":"m_TiltAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TiltMax","t":4,"rt":$n[0].Single,"sn":"m_TiltMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TiltMin","t":4,"rt":$n[0].Single,"sn":"m_TiltMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_TransformTargetRot","t":4,"rt":$n[1].Quaternion,"sn":"m_TransformTargetRot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TurnSmoothing","t":4,"rt":$n[0].Single,"sn":"m_TurnSmoothing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(0.0, 10.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TurnSpeed","t":4,"rt":$n[0].Single,"sn":"m_TurnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_VerticalAutoReturn","t":4,"rt":$n[0].Boolean,"sn":"m_VerticalAutoReturn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*UnityStandardAssets.Cameras.FreeLookCam end.*/

    /*UnityStandardAssets.Cameras.HandHeldCam start.*/
    $m("UnityStandardAssets.Cameras.HandHeldCam", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_BaseSwayAmount","t":4,"rt":$n[0].Single,"sn":"m_BaseSwayAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SwaySpeed","t":4,"rt":$n[0].Single,"sn":"m_SwaySpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(-1.0, 1.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TrackingBias","t":4,"rt":$n[0].Single,"sn":"m_TrackingBias","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TrackingSwayAmount","t":4,"rt":$n[0].Single,"sn":"m_TrackingSwayAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UnityStandardAssets.Cameras.HandHeldCam end.*/

    /*UnityStandardAssets.Cameras.LookatTarget start.*/
    $m("UnityStandardAssets.Cameras.LookatTarget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"m_FollowAngles","t":4,"rt":$n[1].Vector3,"sn":"m_FollowAngles"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_FollowSpeed","t":4,"rt":$n[0].Single,"sn":"m_FollowSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":3,"n":"m_FollowVelocity","t":4,"rt":$n[1].Vector3,"sn":"m_FollowVelocity"},{"a":1,"n":"m_OriginalRotation","t":4,"rt":$n[1].Quaternion,"sn":"m_OriginalRotation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_RotationRange","t":4,"rt":$n[1].Vector2,"sn":"m_RotationRange"}]}; }, $n);
    /*UnityStandardAssets.Cameras.LookatTarget end.*/

    /*UnityStandardAssets.Cameras.PivotBasedCameraRig start.*/
    $m("UnityStandardAssets.Cameras.PivotBasedCameraRig", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":3,"n":"m_Cam","t":4,"rt":$n[1].Transform,"sn":"m_Cam"},{"a":3,"n":"m_LastTargetPosition","t":4,"rt":$n[1].Vector3,"sn":"m_LastTargetPosition"},{"a":3,"n":"m_Pivot","t":4,"rt":$n[1].Transform,"sn":"m_Pivot"}]}; }, $n);
    /*UnityStandardAssets.Cameras.PivotBasedCameraRig end.*/

    /*UnityStandardAssets.Cameras.ProtectCameraFromWallClip start.*/
    $m("UnityStandardAssets.Cameras.ProtectCameraFromWallClip", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*UnityStandardAssets.Cameras.ProtectCameraFromWallClip end.*/

    /*UnityStandardAssets.Cameras.TargetFieldOfView start.*/
    $m("UnityStandardAssets.Cameras.TargetFieldOfView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"MaxBoundsExtent","is":true,"t":8,"pi":[{"n":"obj","pt":$n[1].Transform,"ps":0},{"n":"includeEffects","pt":$n[0].Boolean,"ps":1}],"sn":"MaxBoundsExtent","rt":$n[0].Single,"p":[$n[1].Transform,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":2,"n":"SetTarget","t":8,"pi":[{"n":"newTransform","pt":$n[1].Transform,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[$n[1].Transform]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"m_BoundSize","t":4,"rt":$n[0].Single,"sn":"m_BoundSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_Cam","t":4,"rt":$n[1].Camera,"sn":"m_Cam"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_FovAdjustTime","t":4,"rt":$n[0].Single,"sn":"m_FovAdjustTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_FovAdjustVelocity","t":4,"rt":$n[0].Single,"sn":"m_FovAdjustVelocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_IncludeEffectsInSize","t":4,"rt":$n[0].Boolean,"sn":"m_IncludeEffectsInSize","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"m_LastTarget","t":4,"rt":$n[1].Transform,"sn":"m_LastTarget"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_ZoomAmountMultiplier","t":4,"rt":$n[0].Single,"sn":"m_ZoomAmountMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UnityStandardAssets.Cameras.TargetFieldOfView end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[9].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[10].Path,$n[0].Single,$n[9].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[9].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[9].PathType,$n[9].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[9].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[11].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[9].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[10].Path,$n[0].Single,$n[9].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[9].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[9].PathType,$n[9].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[9].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[11].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[9].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[9].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[9].Tweener,"p":[$n[2].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[9].Tweener,"p":[$n[2].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[9].Tweener,"p":[$n[2].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[12].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[11].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[2].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[12].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[11].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[11].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[9].Sequence,"p":[$n[2].Image,$n[1].Gradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[9].Tweener,"p":[$n[2].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[9].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[9].Tweener,"p":[$n[2].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[9].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos","rt":$n[9].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos$1","rt":$n[9].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[9].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[11].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[2].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[9].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[11].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[9].Tweener,"p":[$n[2].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[9].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[9].Sequence,"p":[$n[1].Material,$n[1].Gradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[9].Sequence,"p":[$n[1].Material,$n[1].Gradient,$n[0].String,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[9].DOTweenCYInstruction.WaitForCompletion,$n[9].DOTweenCYInstruction.WaitForRewind,$n[9].DOTweenCYInstruction.WaitForKill,$n[9].DOTweenCYInstruction.WaitForElapsedLoops,$n[9].DOTweenCYInstruction.WaitForPosition,$n[9].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[9].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[9].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[10].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[9].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[10].Path,$n[0].Single,$n[9].PathMode]},{"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[13].PathOptions,"ps":0},{"n":"t","pt":$n[9].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[13].PathOptions,$n[9].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*SWS.EventCollisionTrigger start.*/
    $m("SWS.EventCollisionTrigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyForce","t":8,"pi":[{"n":"power","pt":$n[0].Int32,"ps":0}],"sn":"ApplyForce","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"myEvent","t":4,"rt":$n[6].UnityEvent,"sn":"myEvent"},{"a":2,"n":"onCollision","t":4,"rt":$n[0].Boolean,"sn":"onCollision","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"onTrigger","t":4,"rt":$n[0].Boolean,"sn":"onTrigger","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SWS.EventCollisionTrigger end.*/

    /*SWS.MoveAnimator start.*/
    $m("SWS.MoveAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnAnimatorMove","t":8,"sn":"OnAnimatorMove","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"a":1,"n":"lastRotY","t":4,"rt":$n[0].Single,"sn":"lastRotY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"sMove","t":4,"rt":$n[4].splineMove,"sn":"sMove"}]}; }, $n);
    /*SWS.MoveAnimator end.*/

    /*SWS.PathIndicator start.*/
    $m("SWS.PathIndicator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"EmitParticles","t":8,"sn":"EmitParticles","rt":$n[5].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"modRotation","t":4,"rt":$n[0].Single,"sn":"modRotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pSys","t":4,"rt":$n[1].ParticleSystem,"sn":"pSys"}]}; }, $n);
    /*SWS.PathIndicator end.*/

    /*SWS.PathRenderer start.*/
    $m("SWS.PathRenderer", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.LineRenderer)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DrawCurved","t":8,"sn":"DrawCurved","rt":$n[0].Void},{"a":1,"n":"DrawLinear","t":8,"sn":"DrawLinear","rt":$n[0].Void},{"a":1,"n":"Render","t":8,"sn":"Render","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartRenderer","t":8,"sn":"StartRenderer","rt":$n[5].IEnumerator},{"a":1,"n":"line","t":4,"rt":$n[1].LineRenderer,"sn":"line"},{"a":2,"n":"onUpdate","t":4,"rt":$n[0].Boolean,"sn":"onUpdate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"path","t":4,"rt":$n[4].PathManager,"sn":"path"},{"a":1,"n":"points","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"points"},{"a":2,"n":"spacing","t":4,"rt":$n[0].Single,"sn":"spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SWS.PathRenderer end.*/

    /*SWS.BezierPathManager start.*/
    $m("SWS.BezierPathManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake$1","rt":$n[0].Void},{"a":2,"n":"CalculatePath","t":8,"sn":"CalculatePath","rt":$n[0].Void},{"ov":true,"a":2,"n":"Create","t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Transform),"ps":0},{"n":"makeChildren","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"Create$1","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Transform),$n[0].Boolean]},{"ov":true,"a":2,"n":"GetPathPointIndex","t":8,"pi":[{"n":"waypoint","pt":$n[0].Int32,"ps":0}],"sn":"GetPathPointIndex","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":2,"n":"GetPathPoints","t":8,"pi":[{"n":"local","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"GetPathPoints","rt":System.Array.type(UnityEngine.Vector3),"p":[$n[0].Boolean]},{"a":1,"n":"GetPoints","t":8,"pi":[{"n":"p0","pt":$n[1].Vector3,"ps":0},{"n":"p1","pt":$n[1].Vector3,"ps":1},{"n":"p2","pt":$n[1].Vector3,"ps":2},{"n":"p3","pt":$n[1].Vector3,"ps":3},{"n":"detail","pt":$n[0].Single,"ps":4}],"sn":"GetPoints","rt":$n[14].List$1(UnityEngine.Vector3),"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"ov":true,"a":2,"n":"GetWaypoint","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetWaypoint","rt":$n[1].Transform,"p":[$n[0].Int32]},{"ov":true,"a":2,"n":"GetWaypointCount","t":8,"sn":"GetWaypointCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":2,"n":"GetWaypointIndex","t":8,"pi":[{"n":"pathPoint","pt":$n[0].Int32,"ps":0}],"sn":"GetWaypointIndex","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos$1","rt":$n[0].Void},{"a":2,"n":"bPoints","t":4,"rt":$n[14].List$1(SWS.BezierPoint),"sn":"bPoints"},{"a":2,"n":"color3","t":4,"rt":$n[1].Color,"sn":"color3"},{"a":2,"n":"connectHandles","t":4,"rt":$n[0].Boolean,"sn":"connectHandles","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"customDetail","t":4,"rt":$n[0].Boolean,"sn":"customDetail","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pathDetail","t":4,"rt":$n[0].Single,"sn":"pathDetail","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pathPoints","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"pathPoints"},{"a":2,"n":"segmentDetail","t":4,"rt":$n[14].List$1(System.Single),"sn":"segmentDetail"},{"a":2,"n":"showHandles","t":4,"rt":$n[0].Boolean,"sn":"showHandles","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SWS.BezierPathManager end.*/

    /*SWS.BezierPoint start.*/
    $m("SWS.BezierPoint", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"cp","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"cp"},{"a":2,"n":"wp","t":4,"rt":$n[1].Transform,"sn":"wp"}]}; }, $n);
    /*SWS.BezierPoint end.*/

    /*SWS.PathManager start.*/
    $m("SWS.PathManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Create","t":8,"pi":[{"n":"parent","dv":null,"o":true,"pt":$n[1].Transform,"ps":0}],"sn":"Create","rt":$n[0].Void,"p":[$n[1].Transform]},{"v":true,"a":2,"n":"Create","t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Transform),"ps":0},{"n":"makeChildren","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"Create$1","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Transform),$n[0].Boolean]},{"v":true,"a":2,"n":"GetHandleSize","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0}],"sn":"GetHandleSize","rt":$n[0].Single,"p":[$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":2,"n":"GetPathPointIndex","t":8,"pi":[{"n":"waypoint","pt":$n[0].Int32,"ps":0}],"sn":"GetPathPointIndex","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"v":true,"a":2,"n":"GetPathPoints","t":8,"pi":[{"n":"local","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"GetPathPoints","rt":System.Array.type(UnityEngine.Vector3),"p":[$n[0].Boolean]},{"v":true,"a":2,"n":"GetWaypoint","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetWaypoint","rt":$n[1].Transform,"p":[$n[0].Int32]},{"v":true,"a":2,"n":"GetWaypointCount","t":8,"sn":"GetWaypointCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"v":true,"a":2,"n":"GetWaypointIndex","t":8,"pi":[{"n":"pathPoint","pt":$n[0].Int32,"ps":0}],"sn":"GetWaypointIndex","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos","rt":$n[0].Void},{"a":2,"n":"color1","t":4,"rt":$n[1].Color,"sn":"color1"},{"a":2,"n":"color2","t":4,"rt":$n[1].Color,"sn":"color2"},{"a":2,"n":"drawCurved","t":4,"rt":$n[0].Boolean,"sn":"drawCurved","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"drawDirection","t":4,"rt":$n[0].Boolean,"sn":"drawDirection","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"replaceObject","t":4,"rt":$n[1].GameObject,"sn":"replaceObject"},{"a":2,"n":"size","t":4,"rt":$n[1].Vector3,"sn":"size"},{"a":2,"n":"skipCustomNames","t":4,"rt":$n[0].Boolean,"sn":"skipCustomNames","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"waypoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"waypoints"}]}; }, $n);
    /*SWS.PathManager end.*/

    /*SWS.WaypointManager start.*/
    $m("SWS.WaypointManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddPath","is":true,"t":8,"pi":[{"n":"path","pt":$n[1].GameObject,"ps":0}],"sn":"AddPath","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CleanUp","is":true,"t":8,"sn":"CleanUp","rt":$n[0].Void},{"a":2,"n":"DrawCurved","is":true,"t":8,"pi":[{"n":"pathPoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"DrawCurved","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3)]},{"a":2,"n":"DrawStraight","is":true,"t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"DrawStraight","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3)]},{"a":2,"n":"GetCurved","is":true,"t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"GetCurved","rt":System.Array.type(UnityEngine.Vector3),"p":[System.Array.type(UnityEngine.Vector3)]},{"a":2,"n":"GetPathLength","is":true,"t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"GetPathLength","rt":$n[0].Single,"p":[System.Array.type(UnityEngine.Vector3)],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetPoint","is":true,"t":8,"pi":[{"n":"gizmoPoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[0].Single,"ps":1}],"sn":"GetPoint","rt":$n[1].Vector3,"p":[System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"SmoothCurve","is":true,"t":8,"pi":[{"n":"pathToCurve","pt":$n[14].List$1(UnityEngine.Vector3),"ps":0},{"n":"interpolations","pt":$n[0].Int32,"ps":1}],"sn":"SmoothCurve","rt":$n[14].List$1(UnityEngine.Vector3),"p":[$n[14].List$1(UnityEngine.Vector3),$n[0].Int32]},{"a":2,"n":"Paths","is":true,"t":4,"rt":$n[14].Dictionary$2(System.String,SWS.PathManager),"sn":"Paths","ro":true},{"a":2,"n":"placementKey","t":4,"rt":$n[1].KeyCode,"sn":"placementKey","box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}},{"a":2,"n":"viewPlacementKey","t":4,"rt":$n[1].KeyCode,"sn":"viewPlacementKey","box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}}]}; }, $n);
    /*SWS.WaypointManager end.*/

    /*SWS.splineMove start.*/
    $m("SWS.splineMove", function () { return {"nested":[$n[4].splineMove.LocalType,$n[4].splineMove.TimeValue,$n[4].splineMove.LoopType,$n[4].splineMove.RotationType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyWaypointRotation","t":8,"pi":[{"n":"rotation","pt":$n[1].Quaternion,"ps":0}],"sn":"ApplyWaypointRotation","rt":$n[0].Void,"p":[$n[1].Quaternion]},{"a":2,"n":"ChangeSpeed","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"ChangeSpeed","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"CreateTween","t":8,"sn":"CreateTween","rt":$n[0].Void},{"a":2,"n":"GoToWaypoint","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GoToWaypoint","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Initialize","t":8,"pi":[{"n":"startAt","dv":0,"o":true,"pt":$n[0].Int32,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"IsMoving","t":8,"sn":"IsMoving","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsPaused","t":8,"sn":"IsPaused","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnWaypointChange","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"OnWaypointChange","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnWaypointReached","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"OnWaypointReached","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnWaypointRotation","t":8,"sn":"OnWaypointRotation","rt":$n[0].Void},{"a":2,"n":"Pause","t":8,"pi":[{"n":"seconds","dv":0.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"Pause","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"RandomizeWaypoints","t":8,"sn":"RandomizeWaypoints","rt":$n[0].Void},{"a":1,"n":"ReachedEnd","t":8,"sn":"ReachedEnd","rt":$n[0].Void},{"a":2,"n":"ResetToStart","t":8,"sn":"ResetToStart","rt":$n[0].Void},{"a":2,"n":"Resume","t":8,"sn":"Resume","rt":$n[0].Void},{"a":2,"n":"Reverse","t":8,"sn":"Reverse","rt":$n[0].Void},{"a":2,"n":"SetPath","t":8,"pi":[{"n":"newPath","pt":$n[4].PathManager,"ps":0}],"sn":"SetPath","rt":$n[0].Void,"p":[$n[4].PathManager]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartMove","t":8,"sn":"StartMove","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"Wait","t":8,"pi":[{"n":"secs","dv":0.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"Wait","rt":$n[5].IEnumerator,"p":[$n[0].Single]},{"a":2,"n":"animEaseType","t":4,"rt":pc.AnimationCurve,"sn":"animEaseType"},{"a":2,"n":"closeLoop","t":4,"rt":$n[0].Boolean,"sn":"closeLoop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"currentPoint","t":4,"rt":$n[0].Int32,"sn":"currentPoint","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"easeType","t":4,"rt":$n[9].Ease,"sn":"easeType","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"events","t":4,"rt":$n[14].List$1(UnityEngine.Events.UnityEvent),"sn":"events"},{"a":2,"n":"localType","t":4,"rt":$n[4].splineMove.LocalType,"sn":"localType","box":function ($v) { return Bridge.box($v, SWS.splineMove.LocalType, System.Enum.toStringFn(SWS.splineMove.LocalType));}},{"a":2,"n":"lockPosition","t":4,"rt":$n[9].AxisConstraint,"sn":"lockPosition","box":function ($v) { return Bridge.box($v, DG.Tweening.AxisConstraint, System.Enum.toStringFn(DG.Tweening.AxisConstraint));}},{"a":2,"n":"lockRotation","t":4,"rt":$n[9].AxisConstraint,"sn":"lockRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.AxisConstraint, System.Enum.toStringFn(DG.Tweening.AxisConstraint));}},{"a":2,"n":"lookAhead","t":4,"rt":$n[0].Single,"sn":"lookAhead","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"loopType","t":4,"rt":$n[4].splineMove.LoopType,"sn":"loopType","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}},{"a":2,"n":"moveToPath","t":4,"rt":$n[0].Boolean,"sn":"moveToPath","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"onStart","t":4,"rt":$n[0].Boolean,"sn":"onStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"originRot","t":4,"rt":$n[1].Quaternion,"sn":"originRot"},{"a":1,"n":"originSpeed","t":4,"rt":$n[0].Single,"sn":"originSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pathContainer","t":4,"rt":$n[4].PathManager,"sn":"pathContainer"},{"a":2,"n":"pathMode","t":4,"rt":$n[9].PathMode,"sn":"pathMode","box":function ($v) { return Bridge.box($v, DG.Tweening.PathMode, System.Enum.toStringFn(DG.Tweening.PathMode));}},{"a":2,"n":"pathType","t":4,"rt":$n[9].PathType,"sn":"pathType","box":function ($v) { return Bridge.box($v, DG.Tweening.PathType, System.Enum.toStringFn(DG.Tweening.PathType));}},{"a":1,"n":"rand","t":4,"rt":$n[0].Random,"sn":"rand"},{"a":2,"n":"reverse","t":4,"rt":$n[0].Boolean,"sn":"reverse","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"rndArray","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"rndArray"},{"a":2,"n":"rotationTarget","t":4,"rt":$n[1].Transform,"sn":"rotationTarget"},{"a":2,"n":"sizeToAdd","t":4,"rt":$n[0].Single,"sn":"sizeToAdd","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"startPoint","t":4,"rt":$n[0].Int32,"sn":"startPoint","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"timeValue","t":4,"rt":$n[4].splineMove.TimeValue,"sn":"timeValue","box":function ($v) { return Bridge.box($v, SWS.splineMove.TimeValue, System.Enum.toStringFn(SWS.splineMove.TimeValue));}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"tween","t":4,"rt":$n[9].Tweener,"sn":"tween"},{"a":1,"n":"waitRoutine","t":4,"rt":$n[1].Coroutine,"sn":"waitRoutine"},{"a":2,"n":"waypointRotation","t":4,"rt":$n[4].splineMove.RotationType,"sn":"waypointRotation","box":function ($v) { return Bridge.box($v, SWS.splineMove.RotationType, System.Enum.toStringFn(SWS.splineMove.RotationType));}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"waypoints","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"waypoints"},{"a":1,"n":"wpPos","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"wpPos"}]}; }, $n);
    /*SWS.splineMove end.*/

    /*SWS.splineMove+LocalType start.*/
    $m("SWS.splineMove.LocalType", function () { return {"td":$n[4].splineMove,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"none","is":true,"t":4,"rt":$n[4].splineMove.LocalType,"sn":"none","box":function ($v) { return Bridge.box($v, SWS.splineMove.LocalType, System.Enum.toStringFn(SWS.splineMove.LocalType));}},{"a":2,"n":"toObject","is":true,"t":4,"rt":$n[4].splineMove.LocalType,"sn":"toObject","box":function ($v) { return Bridge.box($v, SWS.splineMove.LocalType, System.Enum.toStringFn(SWS.splineMove.LocalType));}},{"a":2,"n":"toPath","is":true,"t":4,"rt":$n[4].splineMove.LocalType,"sn":"toPath","box":function ($v) { return Bridge.box($v, SWS.splineMove.LocalType, System.Enum.toStringFn(SWS.splineMove.LocalType));}}]}; }, $n);
    /*SWS.splineMove+LocalType end.*/

    /*SWS.splineMove+TimeValue start.*/
    $m("SWS.splineMove.TimeValue", function () { return {"td":$n[4].splineMove,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"speed","is":true,"t":4,"rt":$n[4].splineMove.TimeValue,"sn":"speed","box":function ($v) { return Bridge.box($v, SWS.splineMove.TimeValue, System.Enum.toStringFn(SWS.splineMove.TimeValue));}},{"a":2,"n":"time","is":true,"t":4,"rt":$n[4].splineMove.TimeValue,"sn":"time","box":function ($v) { return Bridge.box($v, SWS.splineMove.TimeValue, System.Enum.toStringFn(SWS.splineMove.TimeValue));}}]}; }, $n);
    /*SWS.splineMove+TimeValue end.*/

    /*SWS.splineMove+LoopType start.*/
    $m("SWS.splineMove.LoopType", function () { return {"td":$n[4].splineMove,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"loop","is":true,"t":4,"rt":$n[4].splineMove.LoopType,"sn":"loop","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}},{"a":2,"n":"none","is":true,"t":4,"rt":$n[4].splineMove.LoopType,"sn":"none","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}},{"a":2,"n":"pingPong","is":true,"t":4,"rt":$n[4].splineMove.LoopType,"sn":"pingPong","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}},{"a":2,"n":"random","is":true,"t":4,"rt":$n[4].splineMove.LoopType,"sn":"random","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}},{"a":2,"n":"yoyo","is":true,"t":4,"rt":$n[4].splineMove.LoopType,"sn":"yoyo","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}}]}; }, $n);
    /*SWS.splineMove+LoopType end.*/

    /*SWS.splineMove+RotationType start.*/
    $m("SWS.splineMove.RotationType", function () { return {"td":$n[4].splineMove,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"all","is":true,"t":4,"rt":$n[4].splineMove.RotationType,"sn":"all","box":function ($v) { return Bridge.box($v, SWS.splineMove.RotationType, System.Enum.toStringFn(SWS.splineMove.RotationType));}},{"a":2,"n":"none","is":true,"t":4,"rt":$n[4].splineMove.RotationType,"sn":"none","box":function ($v) { return Bridge.box($v, SWS.splineMove.RotationType, System.Enum.toStringFn(SWS.splineMove.RotationType));}}]}; }, $n);
    /*SWS.splineMove+RotationType end.*/

});
