var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointSpring' )
  var i531 = data
  i530.spring = i531[0]
  i530.damper = i531[1]
  i530.targetPosition = i531[2]
  return i530
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointMotor' )
  var i533 = data
  i532.m_TargetVelocity = i533[0]
  i532.m_Force = i533[1]
  i532.m_FreeSpin = i533[2]
  return i532
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointLimits' )
  var i535 = data
  i534.m_Min = i535[0]
  i534.m_Max = i535[1]
  i534.m_Bounciness = i535[2]
  i534.m_BounceMinVelocity = i535[3]
  i534.m_ContactDistance = i535[4]
  i534.minBounce = i535[5]
  i534.maxBounce = i535[6]
  return i534
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointDrive' )
  var i537 = data
  i536.m_PositionSpring = i537[0]
  i536.m_PositionDamper = i537[1]
  i536.m_MaximumForce = i537[2]
  return i536
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i539 = data
  i538.m_Spring = i539[0]
  i538.m_Damper = i539[1]
  return i538
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i541 = data
  i540.m_Limit = i541[0]
  i540.m_Bounciness = i541[1]
  i540.m_ContactDistance = i541[2]
  return i540
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i543 = data
  i542.m_ExtremumSlip = i543[0]
  i542.m_ExtremumValue = i543[1]
  i542.m_AsymptoteSlip = i543[2]
  i542.m_AsymptoteValue = i543[3]
  i542.m_Stiffness = i543[4]
  return i542
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i545 = data
  i544.m_LowerAngle = i545[0]
  i544.m_UpperAngle = i545[1]
  return i544
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i547 = data
  i546.m_MotorSpeed = i547[0]
  i546.m_MaximumMotorTorque = i547[1]
  return i546
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i549 = data
  i548.m_DampingRatio = i549[0]
  i548.m_Frequency = i549[1]
  i548.m_Angle = i549[2]
  return i548
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i551 = data
  i550.m_LowerTranslation = i551[0]
  i550.m_UpperTranslation = i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i552 = root || new pc.UnityMaterial()
  var i553 = data
  i552.name = i553[0]
  request.r(i553[1], i553[2], 0, i552, 'shader')
  i552.renderQueue = i553[3]
  i552.enableInstancing = !!i553[4]
  var i555 = i553[5]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i555[i + 0]) );
  }
  i552.floatParameters = i554
  var i557 = i553[6]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i557[i + 0]) );
  }
  i552.colorParameters = i556
  var i559 = i553[7]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i559[i + 0]) );
  }
  i552.vectorParameters = i558
  var i561 = i553[8]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i561[i + 0]) );
  }
  i552.textureParameters = i560
  var i563 = i553[9]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i563[i + 0]) );
  }
  i552.materialFlags = i562
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i567 = data
  i566.name = i567[0]
  i566.value = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i571 = data
  i570.name = i571[0]
  i570.value = new pc.Color(i571[1], i571[2], i571[3], i571[4])
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i575 = data
  i574.name = i575[0]
  i574.value = new pc.Vec4( i575[1], i575[2], i575[3], i575[4] )
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i579 = data
  i578.name = i579[0]
  request.r(i579[1], i579[2], 0, i578, 'value')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i583 = data
  i582.name = i583[0]
  i582.enabled = !!i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i585 = data
  i584.name = i585[0]
  i584.bounciness = i585[1]
  i584.dynamicFriction = i585[2]
  i584.staticFriction = i585[3]
  i584.frictionCombine = i585[4]
  i584.bounceCombine = i585[5]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i587 = data
  i586.name = i587[0]
  i586.width = i587[1]
  i586.height = i587[2]
  i586.mipmapCount = i587[3]
  i586.anisoLevel = i587[4]
  i586.filterMode = i587[5]
  i586.hdr = !!i587[6]
  i586.format = i587[7]
  i586.wrapMode = i587[8]
  i586.alphaIsTransparency = !!i587[9]
  i586.alphaSource = i587[10]
  return i586
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i588 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i589 = data
  i588.useSafeMode = !!i589[0]
  i588.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i589[1], i588.safeModeOptions)
  i588.timeScale = i589[2]
  i588.useSmoothDeltaTime = !!i589[3]
  i588.maxSmoothUnscaledTime = i589[4]
  i588.rewindCallbackMode = i589[5]
  i588.showUnityEditorReport = !!i589[6]
  i588.logBehaviour = i589[7]
  i588.drawGizmos = !!i589[8]
  i588.defaultRecyclable = !!i589[9]
  i588.defaultAutoPlay = i589[10]
  i588.defaultUpdateType = i589[11]
  i588.defaultTimeScaleIndependent = !!i589[12]
  i588.defaultEaseType = i589[13]
  i588.defaultEaseOvershootOrAmplitude = i589[14]
  i588.defaultEasePeriod = i589[15]
  i588.defaultAutoKill = !!i589[16]
  i588.defaultLoopType = i589[17]
  i588.debugMode = !!i589[18]
  i588.debugStoreTargetId = !!i589[19]
  i588.showPreviewPanel = !!i589[20]
  i588.storeSettingsLocation = i589[21]
  i588.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i589[22], i588.modules)
  i588.showPlayingTweens = !!i589[23]
  i588.showPausedTweens = !!i589[24]
  return i588
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i590 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i591 = data
  i590.nestedTweenFailureBehaviour = i591[0]
  return i590
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i592 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i593 = data
  i592.showPanel = !!i593[0]
  i592.audioEnabled = !!i593[1]
  i592.physicsEnabled = !!i593[2]
  i592.physics2DEnabled = !!i593[3]
  i592.spriteEnabled = !!i593[4]
  i592.uiEnabled = !!i593[5]
  i592.textMeshProEnabled = !!i593[6]
  i592.tk2DEnabled = !!i593[7]
  i592.deAudioEnabled = !!i593[8]
  i592.deUnityExtendedEnabled = !!i593[9]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i595 = data
  i594.position = new pc.Vec3( i595[0], i595[1], i595[2] )
  i594.scale = new pc.Vec3( i595[3], i595[4], i595[5] )
  i594.rotation = new pc.Quat(i595[6], i595[7], i595[8], i595[9])
  return i594
}

Deserializers["WheatPosInRowRandomizer"] = function (request, data, root) {
  var i596 = root || request.c( 'WheatPosInRowRandomizer' )
  var i597 = data
  var i599 = i597[0]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.wheatsQWE = i598
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'sharedMesh')
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'additionalVertexStreams')
  i604.enabled = !!i605[2]
  request.r(i605[3], i605[4], 0, i604, 'sharedMaterial')
  var i607 = i605[5]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i604.sharedMaterials = i606
  i604.receiveShadows = !!i605[6]
  i604.shadowCastingMode = i605[7]
  i604.sortingLayerID = i605[8]
  i604.sortingOrder = i605[9]
  i604.lightmapIndex = i605[10]
  i604.lightmapSceneIndex = i605[11]
  i604.lightmapScaleOffset = new pc.Vec4( i605[12], i605[13], i605[14], i605[15] )
  i604.lightProbeUsage = i605[16]
  i604.reflectionProbeUsage = i605[17]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i611 = data
  i610.center = new pc.Vec3( i611[0], i611[1], i611[2] )
  i610.size = new pc.Vec3( i611[3], i611[4], i611[5] )
  i610.enabled = !!i611[6]
  i610.isTrigger = !!i611[7]
  request.r(i611[8], i611[9], 0, i610, 'material')
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i613 = data
  i612.name = i613[0]
  i612.tag = i613[1]
  i612.enabled = !!i613[2]
  i612.isStatic = !!i613[3]
  i612.layer = i613[4]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i615 = data
  i614.name = i615[0]
  i614.halfPrecision = !!i615[1]
  i614.vertexCount = i615[2]
  i614.aabb = i615[3]
  var i617 = i615[4]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( !!i617[i + 0] );
  }
  i614.streams = i616
  i614.vertices = i615[5]
  var i619 = i615[6]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i619[i + 0]) );
  }
  i614.subMeshes = i618
  var i621 = i615[7]
  var i620 = []
  for(var i = 0; i < i621.length; i += 16) {
    i620.push( new pc.Mat4().setData(i621[i + 0], i621[i + 1], i621[i + 2], i621[i + 3],  i621[i + 4], i621[i + 5], i621[i + 6], i621[i + 7],  i621[i + 8], i621[i + 9], i621[i + 10], i621[i + 11],  i621[i + 12], i621[i + 13], i621[i + 14], i621[i + 15]) );
  }
  i614.bindposes = i620
  var i623 = i615[8]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i623[i + 0]) );
  }
  i614.blendShapes = i622
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i629 = data
  i628.triangles = i629[0]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i635 = data
  i634.name = i635[0]
  var i637 = i635[1]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i637[i + 0]) );
  }
  i634.frames = i636
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i639 = data
  i638.pivot = new pc.Vec2( i639[0], i639[1] )
  i638.anchorMin = new pc.Vec2( i639[2], i639[3] )
  i638.anchorMax = new pc.Vec2( i639[4], i639[5] )
  i638.sizeDelta = new pc.Vec2( i639[6], i639[7] )
  i638.anchoredPosition3D = new pc.Vec3( i639[8], i639[9], i639[10] )
  i638.rotation = new pc.Quat(i639[11], i639[12], i639[13], i639[14])
  i638.scale = new pc.Vec3( i639[15], i639[16], i639[17] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i641 = data
  i640.cullTransparentMesh = !!i641[0]
  return i640
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.Image' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'm_Sprite')
  i642.m_Type = i643[2]
  i642.m_PreserveAspect = !!i643[3]
  i642.m_FillCenter = !!i643[4]
  i642.m_FillMethod = i643[5]
  i642.m_FillAmount = i643[6]
  i642.m_FillClockwise = !!i643[7]
  i642.m_FillOrigin = i643[8]
  i642.m_UseSpriteMesh = !!i643[9]
  i642.m_PixelsPerUnitMultiplier = i643[10]
  request.r(i643[11], i643[12], 0, i642, 'm_Material')
  i642.m_Maskable = !!i643[13]
  i642.m_Color = new pc.Color(i643[14], i643[15], i643[16], i643[17])
  i642.m_RaycastTarget = !!i643[18]
  return i642
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i644 = root || request.c( 'VariableJoystick' )
  var i645 = data
  i644.Interactable = !!i645[0]
  request.r(i645[1], i645[2], 0, i644, 'background')
  request.r(i645[3], i645[4], 0, i644, 'handleRect')
  i644.moveThreshold = i645[5]
  i644.joystickType = i645[6]
  i644.handleRange = i645[7]
  i644.deadZone = i645[8]
  i644.axisOptions = i645[9]
  i644.snapX = !!i645[10]
  i644.snapY = !!i645[11]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i647 = data
  i646.mass = i647[0]
  i646.drag = i647[1]
  i646.angularDrag = i647[2]
  i646.useGravity = !!i647[3]
  i646.isKinematic = !!i647[4]
  i646.constraints = i647[5]
  i646.maxAngularVelocity = i647[6]
  i646.collisionDetectionMode = i647[7]
  i646.interpolation = i647[8]
  return i646
}

Deserializers["CarController"] = function (request, data, root) {
  var i648 = root || request.c( 'CarController' )
  var i649 = data
  var i651 = i649[0]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 2, i650, '')
  }
  i648.m_WheelColliders = i650
  i648.TorqueMultiplier = i649[1]
  i648.m_CarDriveType = i649[2]
  var i653 = i649[3]
  var i652 = []
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 2, i652, '')
  }
  i648.m_WheelMeshes = i652
  var i655 = i649[4]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i648.m_WheelEffects = i654
  i648.m_CentreOfMassOffset = new pc.Vec3( i649[5], i649[6], i649[7] )
  i648.m_MaximumSteerAngle = i649[8]
  i648.m_SteerHelper = i649[9]
  i648.m_TractionControl = i649[10]
  i648.m_FullTorqueOverAllWheels = i649[11]
  i648.m_ReverseTorque = i649[12]
  i648.m_MaxHandbrakeTorque = i649[13]
  i648.m_Downforce = i649[14]
  i648.m_SpeedType = i649[15]
  i648.m_Topspeed = i649[16]
  i648.m_RevRangeBoundary = i649[17]
  i648.m_SlipLimit = i649[18]
  i648.m_BrakeTorque = i649[19]
  i648.m_GearNum = i649[20]
  request.r(i649[21], i649[22], 0, i648, 'm_Rigidbody')
  return i648
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i662 = root || request.c( 'CarUserControl' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, '_Joystick')
  request.r(i663[2], i663[3], 0, i662, '_GasButton')
  i662.CanMove = !!i663[4]
  return i662
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i665 = data
  i664.engineSoundStyle = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'lowAccelClip')
  request.r(i665[3], i665[4], 0, i664, 'lowDecelClip')
  request.r(i665[5], i665[6], 0, i664, 'highAccelClip')
  request.r(i665[7], i665[8], 0, i664, 'highDecelClip')
  i664.pitchMultiplier = i665[9]
  i664.lowPitchMin = i665[10]
  i664.lowPitchMax = i665[11]
  i664.highPitchMultiplier = i665[12]
  i664.maxRolloffDistance = i665[13]
  i664.dopplerLevel = i665[14]
  return i664
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i666 = root || request.c( 'RaceCar' )
  var i667 = data
  i666.Owner = i667[0]
  i666.Score = i667[1]
  i666.Wheat = i667[2]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i669 = data
  i668.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i669[0], i668.main)
  i668.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i669[1], i668.colorBySpeed)
  i668.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i669[2], i668.colorOverLifetime)
  i668.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i669[3], i668.emission)
  i668.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i669[4], i668.rotationBySpeed)
  i668.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i669[5], i668.rotationOverLifetime)
  i668.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i669[6], i668.shape)
  i668.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i669[7], i668.sizeBySpeed)
  i668.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i669[8], i668.sizeOverLifetime)
  i668.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i669[9], i668.textureSheetAnimation)
  i668.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i669[10], i668.velocityOverLifetime)
  i668.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i669[11], i668.noise)
  i668.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i669[12], i668.inheritVelocity)
  i668.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i669[13], i668.forceOverLifetime)
  i668.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i669[14], i668.limitVelocityOverLifetime)
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemMain()
  var i671 = data
  i670.duration = i671[0]
  i670.loop = !!i671[1]
  i670.prewarm = !!i671[2]
  i670.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.startDelay)
  i670.startDelayMultiplier = i671[4]
  i670.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[5], i670.startLifetime)
  i670.startLifetimeMultiplier = i671[6]
  i670.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[7], i670.startSpeed)
  i670.startSpeedMultiplier = i671[8]
  i670.startSize3D = !!i671[9]
  i670.startSize = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[10], i670.startSize)
  i670.startSizeMultiplier = i671[11]
  i670.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[12], i670.startSizeX)
  i670.startSizeXMultiplier = i671[13]
  i670.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[14], i670.startSizeY)
  i670.startSizeYMultiplier = i671[15]
  i670.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[16], i670.startSizeZ)
  i670.startSizeZMultiplier = i671[17]
  i670.startRotation3D = !!i671[18]
  i670.startRotation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[19], i670.startRotation)
  i670.startRotationMultiplier = i671[20]
  i670.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[21], i670.startRotationX)
  i670.startRotationXMultiplier = i671[22]
  i670.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[23], i670.startRotationY)
  i670.startRotationYMultiplier = i671[24]
  i670.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[25], i670.startRotationZ)
  i670.startRotationZMultiplier = i671[26]
  i670.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i671[27], i670.startColor)
  i670.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[28], i670.gravityModifier)
  i670.gravityModifierMultiplier = i671[29]
  i670.simulationSpace = i671[30]
  request.r(i671[31], i671[32], 0, i670, 'customSimulationSpace')
  i670.simulationSpeed = i671[33]
  i670.useUnscaledTime = !!i671[34]
  i670.scalingMode = i671[35]
  i670.playOnAwake = !!i671[36]
  i670.maxParticles = i671[37]
  i670.emitterVelocityMode = i671[38]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i672 = root || new pc.MinMaxCurve()
  var i673 = data
  i672.m_Mode = i673[0]
  i672.m_CurveMin = new pc.AnimationCurve( { keys_flow: i673[1] } )
  i672.m_CurveMax = new pc.AnimationCurve( { keys_flow: i673[2] } )
  i672.m_CurveMultiplier = i673[3]
  i672.m_ConstantMin = i673[4]
  i672.m_ConstantMax = i673[5]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i674 = root || new pc.MinMaxGradient()
  var i675 = data
  i674.m_Mode = i675[0]
  i674.m_GradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i675[1], i674.m_GradientMin)
  i674.m_GradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i675[2], i674.m_GradientMax)
  i674.m_ColorMin = new pc.Color(i675[3], i675[4], i675[5], i675[6])
  i674.m_ColorMax = new pc.Color(i675[7], i675[8], i675[9], i675[10])
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i677 = data
  i676.mode = i677[0]
  var i679 = i677[1]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i679[i + 0]) );
  }
  i676.colorKeys = i678
  var i681 = i677[2]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i681[i + 0]) );
  }
  i676.alphaKeys = i680
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemColorBySpeed()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i683[1], i682.color)
  i682.range = new pc.Vec2( i683[2], i683[3] )
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i687 = data
  i686.color = new pc.Color(i687[0], i687[1], i687[2], i687[3])
  i686.time = i687[4]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i691 = data
  i690.alpha = i691[0]
  i690.time = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemColorOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i693[1], i692.color)
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemEmitter()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.rateOverTime)
  i694.rateOverTimeMultiplier = i695[2]
  i694.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.rateOverDistance)
  i694.rateOverDistanceMultiplier = i695[4]
  var i697 = i695[5]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i697[i + 0]) );
  }
  i694.bursts = i696
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemBurst()
  var i701 = data
  i700.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[0], i700.count)
  i700.cycleCount = i701[1]
  i700.minCount = i701[2]
  i700.maxCount = i701[3]
  i700.repeatInterval = i701[4]
  i700.time = i701[5]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemRotationBySpeed()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[1], i702.x)
  i702.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[2], i702.y)
  i702.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[3], i702.z)
  i702.xMultiplier = i703[4]
  i702.yMultiplier = i703[5]
  i702.zMultiplier = i703[6]
  i702.separateAxes = !!i703[7]
  i702.range = new pc.Vec2( i703[8], i703[9] )
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemRotationOverLifetime()
  var i705 = data
  i704.enabled = !!i705[0]
  i704.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[1], i704.x)
  i704.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[2], i704.y)
  i704.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[3], i704.z)
  i704.xMultiplier = i705[4]
  i704.yMultiplier = i705[5]
  i704.zMultiplier = i705[6]
  i704.separateAxes = !!i705[7]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemShape()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.shapeType = i707[1]
  i706.randomDirectionAmount = i707[2]
  i706.sphericalDirectionAmount = i707[3]
  i706.randomPositionAmount = i707[4]
  i706.alignToDirection = !!i707[5]
  i706.radius = i707[6]
  i706.radiusMode = i707[7]
  i706.radiusSpread = i707[8]
  i706.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[9], i706.radiusSpeed)
  i706.radiusSpeedMultiplier = i707[10]
  i706.radiusThickness = i707[11]
  i706.angle = i707[12]
  i706.length = i707[13]
  i706.boxThickness = new pc.Vec3( i707[14], i707[15], i707[16] )
  i706.meshShapeType = i707[17]
  request.r(i707[18], i707[19], 0, i706, 'mesh')
  request.r(i707[20], i707[21], 0, i706, 'meshRenderer')
  request.r(i707[22], i707[23], 0, i706, 'skinnedMeshRenderer')
  i706.useMeshMaterialIndex = !!i707[24]
  i706.meshMaterialIndex = i707[25]
  i706.useMeshColors = !!i707[26]
  i706.normalOffset = i707[27]
  i706.arc = i707[28]
  i706.arcMode = i707[29]
  i706.arcSpread = i707[30]
  i706.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[31], i706.arcSpeed)
  i706.arcSpeedMultiplier = i707[32]
  i706.donutRadius = i707[33]
  i706.position = new pc.Vec3( i707[34], i707[35], i707[36] )
  i706.rotation = new pc.Vec3( i707[37], i707[38], i707[39] )
  i706.scale = new pc.Vec3( i707[40], i707[41], i707[42] )
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemSizeBySpeed()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[1], i708.size)
  i708.sizeMultiplier = i709[2]
  i708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.x)
  i708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[4], i708.y)
  i708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[5], i708.z)
  i708.xMultiplier = i709[6]
  i708.yMultiplier = i709[7]
  i708.zMultiplier = i709[8]
  i708.separateAxes = !!i709[9]
  i708.range = new pc.Vec2( i709[10], i709[11] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemSizeOverLifetime()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[1], i710.size)
  i710.sizeMultiplier = i711[2]
  i710.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.x)
  i710.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[4], i710.y)
  i710.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[5], i710.z)
  i710.xMultiplier = i711[6]
  i710.yMultiplier = i711[7]
  i710.zMultiplier = i711[8]
  i710.separateAxes = !!i711[9]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.mode = i713[1]
  i712.animation = i713[2]
  i712.numTilesX = i713[3]
  i712.numTilesY = i713[4]
  i712.useRandomRow = !!i713[5]
  i712.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[6], i712.frameOverTime)
  i712.frameOverTimeMultiplier = i713[7]
  i712.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[8], i712.startFrame)
  i712.startFrameMultiplier = i713[9]
  i712.cycleCount = i713[10]
  i712.rowIndex = i713[11]
  i712.flipU = i713[12]
  i712.flipV = i713[13]
  i712.spriteCount = i713[14]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[1], i714.x)
  i714.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[2], i714.y)
  i714.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.z)
  i714.xMultiplier = i715[4]
  i714.yMultiplier = i715[5]
  i714.zMultiplier = i715[6]
  i714.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[7], i714.speedModifier)
  i714.speedModifierMultiplier = i715[8]
  i714.space = i715[9]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemNoise()
  var i717 = data
  i716.enabled = !!i717[0]
  i716.separateAxes = !!i717[1]
  i716.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[2], i716.strengthX)
  i716.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[3], i716.strengthY)
  i716.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[4], i716.strengthZ)
  i716.strengthXMultiplier = i717[5]
  i716.strengthYMultiplier = i717[6]
  i716.strengthZMultiplier = i717[7]
  i716.frequency = i717[8]
  i716.damping = !!i717[9]
  i716.octaveCount = i717[10]
  i716.octaveMultiplier = i717[11]
  i716.octaveScale = i717[12]
  i716.quality = i717[13]
  i716.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[14], i716.scrollSpeed)
  i716.scrollSpeedMultiplier = i717[15]
  i716.remapEnabled = !!i717[16]
  i716.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[17], i716.remapX)
  i716.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[18], i716.remapY)
  i716.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[19], i716.remapZ)
  i716.remapXMultiplier = i717[20]
  i716.remapYMultiplier = i717[21]
  i716.remapZMultiplier = i717[22]
  i716.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[23], i716.positionAmount)
  i716.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[24], i716.rotationAmount)
  i716.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[25], i716.sizeAmount)
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i718 = root || new pc.ParticleSystemInheritVelocity()
  var i719 = data
  i718.enabled = !!i719[0]
  i718.mode = i719[1]
  i718.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[2], i718.curve)
  i718.curveMultiplier = i719[3]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i720 = root || new pc.ParticleSystemForceOverLifetime()
  var i721 = data
  i720.enabled = !!i721[0]
  i720.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[1], i720.x)
  i720.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[2], i720.y)
  i720.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[3], i720.z)
  i720.xMultiplier = i721[4]
  i720.yMultiplier = i721[5]
  i720.zMultiplier = i721[6]
  i720.space = i721[7]
  i720.randomized = !!i721[8]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[1], i722.limit)
  i722.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[2], i722.limitX)
  i722.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[3], i722.limitY)
  i722.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[4], i722.limitZ)
  i722.limitMultiplier = i723[5]
  i722.limitXMultiplier = i723[6]
  i722.limitYMultiplier = i723[7]
  i722.limitZMultiplier = i723[8]
  i722.dampen = i723[9]
  i722.separateAxes = !!i723[10]
  i722.space = i723[11]
  i722.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[12], i722.drag)
  i722.dragMultiplier = i723[13]
  i722.multiplyDragByParticleSize = !!i723[14]
  i722.multiplyDragByParticleVelocity = !!i723[15]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i725 = data
  i724.enabled = !!i725[0]
  request.r(i725[1], i725[2], 0, i724, 'sharedMaterial')
  var i727 = i725[3]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.sharedMaterials = i726
  i724.receiveShadows = !!i725[4]
  i724.shadowCastingMode = i725[5]
  i724.sortingLayerID = i725[6]
  i724.sortingOrder = i725[7]
  i724.lightmapIndex = i725[8]
  i724.lightmapSceneIndex = i725[9]
  i724.lightmapScaleOffset = new pc.Vec4( i725[10], i725[11], i725[12], i725[13] )
  i724.lightProbeUsage = i725[14]
  i724.reflectionProbeUsage = i725[15]
  request.r(i725[16], i725[17], 0, i724, 'mesh')
  i724.meshCount = i725[18]
  i724.activeVertexStreamsCount = i725[19]
  i724.alignment = i725[20]
  i724.renderMode = i725[21]
  i724.sortMode = i725[22]
  i724.lengthScale = i725[23]
  i724.velocityScale = i725[24]
  i724.cameraVelocityScale = i725[25]
  i724.normalDirection = i725[26]
  i724.sortingFudge = i725[27]
  i724.minParticleSize = i725[28]
  i724.maxParticleSize = i725[29]
  i724.pivot = new pc.Vec3( i725[30], i725[31], i725[32] )
  request.r(i725[33], i725[34], 0, i724, 'trailMaterial')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.WheelCollider"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.WheelCollider' )
  var i729 = data
  i728.center = new pc.Vec3( i729[0], i729[1], i729[2] )
  i728.radius = i729[3]
  i728.mass = i729[4]
  i728.suspensionDistance = i729[5]
  i728.forceAppPointDistance = i729[6]
  i728.suspensionSpring = request.d('UnityEngine.JointSpring', i729[7], i728.suspensionSpring)
  i728.forwardFriction = request.d('UnityEngine.WheelFrictionCurve', i729[8], i728.forwardFriction)
  i728.sidewaysFriction = request.d('UnityEngine.WheelFrictionCurve', i729[9], i728.sidewaysFriction)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'clip')
  i730.playOnAwake = !!i731[2]
  i730.loop = !!i731[3]
  i730.enabled = !!i731[4]
  return i730
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i732 = root || request.c( 'WheelEffects' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'SkidTrailPrefab')
  request.r(i733[2], i733[3], 0, i732, 'skidParticles')
  return i732
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i734 = root || request.c( 'JustWheelMeshes' )
  var i735 = data
  var i737 = i735[0]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.m_WheelMeshes = i736
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'animatorController')
  i738.updateMode = i739[2]
  var i741 = i739[3]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.humanBones = i740
  i738.enabled = !!i739[4]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i743 = data
  i742.enabled = !!i743[0]
  request.r(i743[1], i743[2], 0, i742, 'sharedMaterial')
  var i745 = i743[3]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i742.sharedMaterials = i744
  i742.receiveShadows = !!i743[4]
  i742.shadowCastingMode = i743[5]
  i742.sortingLayerID = i743[6]
  i742.sortingOrder = i743[7]
  i742.lightmapIndex = i743[8]
  i742.lightmapSceneIndex = i743[9]
  i742.lightmapScaleOffset = new pc.Vec4( i743[10], i743[11], i743[12], i743[13] )
  i742.lightProbeUsage = i743[14]
  i742.reflectionProbeUsage = i743[15]
  request.r(i743[16], i743[17], 0, i742, 'sharedMesh')
  var i747 = i743[18]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i742.bones = i746
  i742.updateWhenOffscreen = !!i743[19]
  i742.localBounds = i743[20]
  request.r(i743[21], i743[22], 0, i742, 'rootBone')
  var i749 = i743[23]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i749[i + 0]) );
  }
  i742.blendShapesWeights = i748
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i753 = data
  i752.weight = i753[0]
  return i752
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i754 = root || request.c( 'BlobShadowMovement' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'Target')
  i754.Offset = new pc.Vec3( i755[2], i755[3], i755[4] )
  return i754
}

Deserializers["SWS.splineMove"] = function (request, data, root) {
  var i756 = root || request.c( 'SWS.splineMove' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'pathContainer')
  i756.onStart = !!i757[2]
  i756.moveToPath = !!i757[3]
  i756.reverse = !!i757[4]
  i756.startPoint = i757[5]
  i756.currentPoint = i757[6]
  i756.closeLoop = !!i757[7]
  i756.localType = i757[8]
  i756.lookAhead = i757[9]
  i756.sizeToAdd = i757[10]
  i756.timeValue = i757[11]
  i756.speed = i757[12]
  i756.animEaseType = new pc.AnimationCurve( { keys_flow: i757[13] } )
  i756.loopType = i757[14]
  var i759 = i757[15]
  var i758 = []
  for(var i = 0; i < i759.length; i += 3) {
    i758.push( new pc.Vec3( i759[i + 0], i759[i + 1], i759[i + 2] ) );
  }
  i756.waypoints = i758
  var i761 = i757[16]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('UnityEngine.Events.UnityEvent', i761[i + 0]));
  }
  i756.events = i760
  i756.pathType = i757[17]
  i756.pathMode = i757[18]
  i756.easeType = i757[19]
  i756.lockPosition = i757[20]
  i756.lockRotation = i757[21]
  i756.waypointRotation = i757[22]
  request.r(i757[23], i757[24], 0, i756, 'rotationTarget')
  return i756
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i767 = data
  i766.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i767[0], i766.m_PersistentCalls)
  return i766
}

Deserializers["BotWheels"] = function (request, data, root) {
  var i768 = root || request.c( 'BotWheels' )
  var i769 = data
  i768.RotationSpeed = i769[0]
  i768.IsRotating = !!i769[1]
  var i771 = i769[2]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i768.Wheels = i770
  return i768
}

Deserializers["Bot"] = function (request, data, root) {
  var i772 = root || request.c( 'Bot' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'RaceCar')
  request.r(i773[2], i773[3], 0, i772, 'SplineMove')
  request.r(i773[4], i773[5], 0, i772, 'BotWheels')
  return i772
}

Deserializers["SWS.PathManager"] = function (request, data, root) {
  var i774 = root || request.c( 'SWS.PathManager' )
  var i775 = data
  var i777 = i775[0]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.waypoints = i776
  i774.drawCurved = !!i775[1]
  i774.drawDirection = !!i775[2]
  i774.color1 = new pc.Color(i775[3], i775[4], i775[5], i775[6])
  i774.color2 = new pc.Color(i775[7], i775[8], i775[9], i775[10])
  i774.size = new pc.Vec3( i775[11], i775[12], i775[13] )
  i774.radius = i775[14]
  i774.skipCustomNames = !!i775[15]
  request.r(i775[16], i775[17], 0, i774, 'replaceObject')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i779 = data
  i778.enabled = !!i779[0]
  i778.isTrigger = !!i779[1]
  request.r(i779[2], i779[3], 0, i778, 'material')
  i778.center = new pc.Vec3( i779[4], i779[5], i779[6] )
  i778.radius = i779[7]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i781 = data
  i780.enabled = !!i781[0]
  i780.isTrigger = !!i781[1]
  request.r(i781[2], i781[3], 0, i780, 'material')
  request.r(i781[4], i781[5], 0, i780, 'sharedMesh')
  i780.convex = !!i781[6]
  return i780
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i782 = root || request.c( 'FinishTrigger' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, '_MainScreen')
  request.r(i783[2], i783[3], 0, i782, '_WinScren')
  request.r(i783[4], i783[5], 0, i782, '_LossScreen')
  return i782
}

Deserializers["Checkpoint"] = function (request, data, root) {
  var i784 = root || request.c( 'Checkpoint' )
  var i785 = data
  return i784
}

Deserializers["CarTrigger"] = function (request, data, root) {
  var i786 = root || request.c( 'CarTrigger' )
  var i787 = data
  i786.OnTriggerEnterEvent = request.d('UnityEngine.Events.UnityEvent', i787[0], i786.OnTriggerEnterEvent)
  i786.OnTriggerStayEvent = request.d('UnityEngine.Events.UnityEvent', i787[1], i786.OnTriggerStayEvent)
  i786.OnTriggerExitEvent = request.d('UnityEngine.Events.UnityEvent', i787[2], i786.OnTriggerExitEvent)
  return i786
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i789 = data
  var i791 = i789[0]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('UnityEngine.Events.PersistentCall', i791[i + 0]));
  }
  i788.m_Calls = i790
  return i788
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'm_Target')
  i794.m_MethodName = i795[2]
  i794.m_Mode = i795[3]
  i794.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i795[4], i794.m_Arguments)
  i794.m_CallState = i795[5]
  return i794
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'm_ObjectArgument')
  i796.m_ObjectArgumentAssemblyTypeName = i797[2]
  i796.m_IntArgument = i797[3]
  i796.m_FloatArgument = i797[4]
  i796.m_StringArgument = i797[5]
  i796.m_BoolArgument = !!i797[6]
  return i796
}

Deserializers["GameManager"] = function (request, data, root) {
  var i798 = root || request.c( 'GameManager' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'MainCamera')
  i798.LandscapeFov = i799[2]
  i798.PortraitFov = i799[3]
  i798.WheatCullDistance = i799[4]
  request.r(i799[5], i799[6], 0, i798, 'CountdownWidget')
  request.r(i799[7], i799[8], 0, i798, 'Joystick')
  request.r(i799[9], i799[10], 0, i798, 'JoystickTutorialButton')
  request.r(i799[11], i799[12], 0, i798, 'GasButton')
  request.r(i799[13], i799[14], 0, i798, 'TutorialWindow')
  request.r(i799[15], i799[16], 0, i798, 'MainBackroundImage')
  request.r(i799[17], i799[18], 0, i798, 'WinScreen')
  request.r(i799[19], i799[20], 0, i798, 'LoseScreen')
  request.r(i799[21], i799[22], 0, i798, 'MainScreen')
  var i801 = i799[23]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.Opponents = i800
  request.r(i799[24], i799[25], 0, i798, 'PlayerCar')
  request.r(i799[26], i799[27], 0, i798, 'CarUserControl')
  i798.Position = i799[28]
  request.r(i799[29], i799[30], 0, i798, 'LastCheckpoint')
  var i803 = i799[31]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i798.vehicles = i802
  var i805 = i799[32]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i798.drivers = i804
  var i807 = i799[33]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i798.trackPrefabs = i806
  request.r(i799[34], i799[35], 0, i798, 'trackParent')
  i798._WheatCullDistance = i799[36]
  request.r(i799[37], i799[38], 0, i798, 'wheatGenerator')
  return i798
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i810 = root || request.c( 'LunaUIFields' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'GasHintText')
  i810.GasHintString = i811[2]
  request.r(i811[3], i811[4], 0, i810, 'SteerHintText')
  i810.SteerHintString = i811[5]
  request.r(i811[6], i811[7], 0, i810, 'ObjectiveHintText')
  i810.ObjectiveHintString = i811[8]
  request.r(i811[9], i811[10], 0, i810, 'LevelFailedButtonText')
  i810.LevelFailedButtonString = i811[11]
  request.r(i811[12], i811[13], 0, i810, 'LevelCompleteButtonText')
  i810.LevelCompleteButtonString = i811[14]
  return i810
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i812 = root || request.c( 'WheatGenerator' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'wheatRow')
  request.r(i813[2], i813[3], 0, i812, 'wheatParent')
  return i812
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i815 = data
  i814.m_MoveSpeed = i815[0]
  i814.m_TurnSpeed = i815[1]
  i814.m_RollSpeed = i815[2]
  i814.m_FollowVelocity = !!i815[3]
  i814.m_FollowTilt = !!i815[4]
  i814.m_SpinTurnLimit = i815[5]
  i814.m_TargetVelocityLowerLimit = i815[6]
  i814.m_SmoothTurnTime = i815[7]
  request.r(i815[8], i815[9], 0, i814, 'm_Target')
  i814.m_AutoTargetPlayer = !!i815[10]
  i814.m_UpdateType = i815[11]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i817 = data
  i816.enabled = !!i817[0]
  i816.aspect = i817[1]
  i816.orthographic = !!i817[2]
  i816.orthographicSize = i817[3]
  i816.backgroundColor = new pc.Color(i817[4], i817[5], i817[6], i817[7])
  i816.nearClipPlane = i817[8]
  i816.farClipPlane = i817[9]
  i816.fieldOfView = i817[10]
  i816.depth = i817[11]
  i816.clearFlags = i817[12]
  i816.cullingMask = i817[13]
  i816.rect = i817[14]
  request.r(i817[15], i817[16], 0, i816, 'targetTexture')
  return i816
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i818 = root || request.c( 'CameraFollower' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'Target')
  i818.PositionOffset = new pc.Vec3( i819[2], i819[3], i819[4] )
  i818.RotationOffset = new pc.Vec3( i819[5], i819[6], i819[7] )
  i818.CameraSpeed = i819[8]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i821 = data
  i820.enabled = !!i821[0]
  i820.type = i821[1]
  i820.color = new pc.Color(i821[2], i821[3], i821[4], i821[5])
  i820.cullingMask = i821[6]
  i820.intensity = i821[7]
  i820.range = i821[8]
  i820.spotAngle = i821[9]
  i820.shadows = i821[10]
  i820.shadowNormalBias = i821[11]
  i820.shadowBias = i821[12]
  i820.shadowStrength = i821[13]
  i820.lightmapBakeType = i821[14]
  i820.renderMode = i821[15]
  request.r(i821[16], i821[17], 0, i820, 'cookie')
  i820.cookieSize = i821[18]
  return i820
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_FirstSelected')
  i822.m_sendNavigationEvents = !!i823[2]
  i822.m_DragThreshold = i823[3]
  return i822
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i825 = data
  i824.m_HorizontalAxis = i825[0]
  i824.m_VerticalAxis = i825[1]
  i824.m_SubmitButton = i825[2]
  i824.m_CancelButton = i825[3]
  i824.m_InputActionsPerSecond = i825[4]
  i824.m_RepeatDelay = i825[5]
  i824.m_ForceModuleActive = !!i825[6]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i827 = data
  i826.enabled = !!i827[0]
  i826.planeDistance = i827[1]
  i826.referencePixelsPerUnit = i827[2]
  i826.renderMode = i827[3]
  i826.renderOrder = i827[4]
  i826.sortingLayerName = i827[5]
  i826.sortingOrder = i827[6]
  i826.scaleFactor = i827[7]
  request.r(i827[8], i827[9], 0, i826, 'worldCamera')
  i826.overrideSorting = !!i827[10]
  i826.pixelPerfect = !!i827[11]
  i826.targetDisplay = i827[12]
  i826.overridePixelPerfect = !!i827[13]
  return i826
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i829 = data
  i828.m_UiScaleMode = i829[0]
  i828.m_ReferencePixelsPerUnit = i829[1]
  i828.m_ScaleFactor = i829[2]
  i828.m_ReferenceResolution = new pc.Vec2( i829[3], i829[4] )
  i828.m_ScreenMatchMode = i829[5]
  i828.m_MatchWidthOrHeight = i829[6]
  i828.m_PhysicalUnit = i829[7]
  i828.m_FallbackScreenDPI = i829[8]
  i828.m_DefaultSpriteDPI = i829[9]
  i828.m_DynamicPixelsPerUnit = i829[10]
  return i828
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i831 = data
  i830.m_IgnoreReversedGraphics = !!i831[0]
  i830.m_BlockingObjects = i831[1]
  i830.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i831[2] )
  return i830
}

Deserializers["Countdown"] = function (request, data, root) {
  var i832 = root || request.c( 'Countdown' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'CountdownText')
  request.r(i833[2], i833[3], 0, i832, 'Go_Image')
  request.r(i833[4], i833[5], 0, i832, 'Outline')
  request.r(i833[6], i833[7], 0, i832, 'MainWindow')
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i835 = data
  i834.m_Alpha = i835[0]
  i834.m_Interactable = !!i835[1]
  i834.m_BlocksRaycasts = !!i835[2]
  i834.m_IgnoreParentGroups = !!i835[3]
  i834.enabled = !!i835[4]
  return i834
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Text' )
  var i837 = data
  i836.m_FontData = request.d('UnityEngine.UI.FontData', i837[0], i836.m_FontData)
  i836.m_Text = i837[1]
  request.r(i837[2], i837[3], 0, i836, 'm_Material')
  i836.m_Maskable = !!i837[4]
  i836.m_Color = new pc.Color(i837[5], i837[6], i837[7], i837[8])
  i836.m_RaycastTarget = !!i837[9]
  return i836
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.FontData' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_Font')
  i838.m_FontSize = i839[2]
  i838.m_FontStyle = i839[3]
  i838.m_BestFit = !!i839[4]
  i838.m_MinSize = i839[5]
  i838.m_MaxSize = i839[6]
  i838.m_Alignment = i839[7]
  i838.m_AlignByGeometry = !!i839[8]
  i838.m_RichText = !!i839[9]
  i838.m_HorizontalOverflow = i839[10]
  i838.m_VerticalOverflow = i839[11]
  i838.m_LineSpacing = i839[12]
  return i838
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.Outline' )
  var i841 = data
  i840.m_EffectColor = new pc.Color(i841[0], i841[1], i841[2], i841[3])
  i840.m_EffectDistance = new pc.Vec2( i841[4], i841[5] )
  i840.m_UseGraphicAlpha = !!i841[6]
  return i840
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i842 = root || request.c( 'WinScreenWidget' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'RaceCar')
  request.r(i843[2], i843[3], 0, i842, 'WheatText')
  i842.WheatMultiplier = i843[4]
  request.r(i843[5], i843[6], 0, i842, 'GameManager')
  return i842
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.Button' )
  var i845 = data
  i844.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i845[0], i844.m_OnClick)
  i844.m_Navigation = request.d('UnityEngine.UI.Navigation', i845[1], i844.m_Navigation)
  i844.m_Transition = i845[2]
  i844.m_Colors = request.d('UnityEngine.UI.ColorBlock', i845[3], i844.m_Colors)
  i844.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i845[4], i844.m_SpriteState)
  i844.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i845[5], i844.m_AnimationTriggers)
  i844.m_Interactable = !!i845[6]
  request.r(i845[7], i845[8], 0, i844, 'm_TargetGraphic')
  return i844
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i847 = data
  i846.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i847[0], i846.m_PersistentCalls)
  return i846
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i849 = data
  i848.m_Mode = i849[0]
  request.r(i849[1], i849[2], 0, i848, 'm_SelectOnUp')
  request.r(i849[3], i849[4], 0, i848, 'm_SelectOnDown')
  request.r(i849[5], i849[6], 0, i848, 'm_SelectOnLeft')
  request.r(i849[7], i849[8], 0, i848, 'm_SelectOnRight')
  return i848
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i851 = data
  i850.m_NormalColor = new pc.Color(i851[0], i851[1], i851[2], i851[3])
  i850.m_HighlightedColor = new pc.Color(i851[4], i851[5], i851[6], i851[7])
  i850.m_PressedColor = new pc.Color(i851[8], i851[9], i851[10], i851[11])
  i850.m_SelectedColor = new pc.Color(i851[12], i851[13], i851[14], i851[15])
  i850.m_DisabledColor = new pc.Color(i851[16], i851[17], i851[18], i851[19])
  i850.m_ColorMultiplier = i851[20]
  i850.m_FadeDuration = i851[21]
  return i850
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_HighlightedSprite')
  request.r(i853[2], i853[3], 0, i852, 'm_PressedSprite')
  request.r(i853[4], i853[5], 0, i852, 'm_SelectedSprite')
  request.r(i853[6], i853[7], 0, i852, 'm_DisabledSprite')
  return i852
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i855 = data
  i854.m_NormalTrigger = i855[0]
  i854.m_HighlightedTrigger = i855[1]
  i854.m_PressedTrigger = i855[2]
  i854.m_SelectedTrigger = i855[3]
  i854.m_DisabledTrigger = i855[4]
  return i854
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i856 = root || request.c( 'EndGameButton' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'GameManager')
  return i856
}

Deserializers["PositionWidget"] = function (request, data, root) {
  var i858 = root || request.c( 'PositionWidget' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'GameManager')
  request.r(i859[2], i859[3], 0, i858, 'Image')
  var i861 = i859[4]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i858.Numbers = i860
  return i858
}

Deserializers["ButtonInput"] = function (request, data, root) {
  var i864 = root || request.c( 'ButtonInput' )
  var i865 = data
  i864.IsInteractable = !!i865[0]
  return i864
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Slider' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'm_FillRect')
  request.r(i867[2], i867[3], 0, i866, 'm_HandleRect')
  i866.m_Direction = i867[4]
  i866.m_MinValue = i867[5]
  i866.m_MaxValue = i867[6]
  i866.m_WholeNumbers = !!i867[7]
  i866.m_Value = i867[8]
  i866.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i867[9], i866.m_OnValueChanged)
  i866.m_Navigation = request.d('UnityEngine.UI.Navigation', i867[10], i866.m_Navigation)
  i866.m_Transition = i867[11]
  i866.m_Colors = request.d('UnityEngine.UI.ColorBlock', i867[12], i866.m_Colors)
  i866.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i867[13], i866.m_SpriteState)
  i866.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i867[14], i866.m_AnimationTriggers)
  i866.m_Interactable = !!i867[15]
  request.r(i867[16], i867[17], 0, i866, 'm_TargetGraphic')
  return i866
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i869 = data
  i868.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i869[0], i868.m_PersistentCalls)
  return i868
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i870 = root || request.c( 'WheatSliderWidget' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'Slider')
  request.r(i871[2], i871[3], 0, i870, 'gameManager')
  request.r(i871[4], i871[5], 0, i870, 'BarIconImage')
  request.r(i871[6], i871[7], 0, i870, 'WheatImage')
  i870.MaxWheat = i871[8]
  return i870
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i872 = root || request.c( 'TimeSinceStartup' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'Text')
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i875 = data
  i874.name = i875[0]
  i874.atlasId = i875[1]
  i874.mipmapCount = i875[2]
  i874.hdr = !!i875[3]
  i874.size = i875[4]
  i874.anisoLevel = i875[5]
  i874.filterMode = i875[6]
  i874.wrapMode = i875[7]
  var i877 = i875[8]
  var i876 = []
  for(var i = 0; i < i877.length; i += 4) {
    i876.push( UnityEngine.Rect.MinMaxRect(i877[i + 0], i877[i + 1], i877[i + 2], i877[i + 3]) );
  }
  i874.rects = i876
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i881 = data
  i880.name = i881[0]
  i880.index = i881[1]
  i880.startup = !!i881[2]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i883 = data
  i882.ambientIntensity = i883[0]
  i882.reflectionIntensity = i883[1]
  i882.ambientMode = i883[2]
  i882.ambientLight = new pc.Color(i883[3], i883[4], i883[5], i883[6])
  i882.ambientSkyColor = new pc.Color(i883[7], i883[8], i883[9], i883[10])
  i882.ambientGroundColor = new pc.Color(i883[11], i883[12], i883[13], i883[14])
  i882.ambientEquatorColor = new pc.Color(i883[15], i883[16], i883[17], i883[18])
  i882.fogColor = new pc.Color(i883[19], i883[20], i883[21], i883[22])
  i882.fogEndDistance = i883[23]
  i882.fogStartDistance = i883[24]
  i882.fogDensity = i883[25]
  i882.fog = !!i883[26]
  request.r(i883[27], i883[28], 0, i882, 'skybox')
  i882.fogMode = i883[29]
  var i885 = i883[30]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i885[i + 0]) );
  }
  i882.lightmaps = i884
  i882.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i883[31], i882.lightProbes)
  i882.lightmapsMode = i883[32]
  i882.environmentLightingMode = i883[33]
  i882.ambientProbe = new pc.SphericalHarmonicsL2(i883[34])
  request.r(i883[35], i883[36], 0, i882, 'customReflection')
  request.r(i883[37], i883[38], 0, i882, 'defaultReflection')
  i882.defaultReflectionMode = i883[39]
  i882.defaultReflectionResolution = i883[40]
  i882.sunLightObjectId = i883[41]
  i882.pixelLightCount = i883[42]
  i882.defaultReflectionHDR = !!i883[43]
  i882.hasLightDataAsset = !!i883[44]
  i882.hasManualGenerate = !!i883[45]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'lightmapColor')
  request.r(i889[2], i889[3], 0, i888, 'lightmapDirection')
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i890 = root || new UnityEngine.LightProbes()
  var i891 = data
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i897 = data
  i896.name = i897[0]
  var i899 = i897[1]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i899[i + 0]) );
  }
  i896.passes = i898
  var i901 = i897[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i901[i + 0]) );
  }
  i896.defaultParameterValues = i900
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i904 = root || new pc.UnityShaderPass()
  var i905 = data
  i904.passType = i905[0]
  i904.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[1], i904.zTest)
  i904.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[2], i904.zWrite)
  i904.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[3], i904.culling)
  i904.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i905[4], i904.blending)
  i904.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i905[5], i904.alphaBlending)
  i904.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[6], i904.colorWriteMask)
  i904.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[7], i904.offsetUnits)
  i904.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[8], i904.offsetFactor)
  i904.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[9], i904.stencilRef)
  i904.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[10], i904.stencilReadMask)
  i904.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[11], i904.stencilWriteMask)
  i904.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i905[12], i904.stencilOp)
  i904.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i905[13], i904.stencilOpFront)
  i904.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i905[14], i904.stencilOpBack)
  var i907 = i905[15]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i907[i + 0]) );
  }
  i904.tags = i906
  var i909 = i905[16]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i909[i + 0]) );
  }
  i904.variants = i908
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i911 = data
  i910.val = i911[0]
  i910.name = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i913 = data
  i912.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[0], i912.src)
  i912.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[1], i912.dst)
  i912.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[2], i912.op)
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i915 = data
  i914.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[0], i914.pass)
  i914.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[1], i914.fail)
  i914.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[2], i914.zFail)
  i914.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[3], i914.comp)
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i919 = data
  i918.name = i919[0]
  i918.value = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i923 = data
  var i925 = i923[0]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i922.keywords = i924
  i922.vertexProgram = i923[1]
  i922.fragmentProgram = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i931 = data
  i930.name = i931[0]
  i930.type = i931[1]
  i930.value = new pc.Vec4( i931[2], i931[3], i931[4], i931[5] )
  i930.textureValue = i931[6]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i933 = data
  i932.name = i933[0]
  request.r(i933[1], i933[2], 0, i932, 'texture')
  i932.aabb = i933[3]
  i932.vertices = i933[4]
  i932.triangles = i933[5]
  i932.textureRect = UnityEngine.Rect.MinMaxRect(i933[6], i933[7], i933[8], i933[9])
  i932.packedRect = UnityEngine.Rect.MinMaxRect(i933[10], i933[11], i933[12], i933[13])
  i932.border = new pc.Vec4( i933[14], i933[15], i933[16], i933[17] )
  i932.transparency = i933[18]
  i932.bounds = i933[19]
  i932.pixelsPerUnit = i933[20]
  i932.textureWidth = i933[21]
  i932.textureHeight = i933[22]
  i932.nativeSize = new pc.Vec2( i933[23], i933[24] )
  i932.pivot = new pc.Vec2( i933[25], i933[26] )
  i932.textureRectOffset = new pc.Vec2( i933[27], i933[28] )
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i935 = data
  i934.name = i935[0]
  i934.wrapMode = i935[1]
  i934.isLooping = !!i935[2]
  i934.length = i935[3]
  var i937 = i935[4]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i937[i + 0]) );
  }
  i934.curves = i936
  var i939 = i935[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i939[i + 0]) );
  }
  i934.events = i938
  i934.halfPrecision = !!i935[6]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i943 = data
  i942.path = i943[0]
  i942.componentType = i943[1]
  i942.property = i943[2]
  i942.keys = i943[3]
  var i945 = i943[4]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i945[i + 0]) );
  }
  i942.objectReferenceKeys = i944
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i949 = data
  i948.time = i949[0]
  request.r(i949[1], i949[2], 0, i948, 'value')
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i953 = data
  i952.functionName = i953[0]
  i952.floatParameter = i953[1]
  i952.intParameter = i953[2]
  i952.stringParameter = i953[3]
  request.r(i953[4], i953[5], 0, i952, 'objectReferenceParameter')
  i952.time = i953[6]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i955 = data
  i954.name = i955[0]
  i954.ascent = i955[1]
  i954.lineHeight = i955[2]
  i954.fontSize = i955[3]
  var i957 = i955[4]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i957[i + 0]) );
  }
  i954.characterInfo = i956
  request.r(i955[5], i955[6], 0, i954, 'texture')
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i961 = data
  i960.index = i961[0]
  i960.advance = i961[1]
  i960.bearing = i961[2]
  i960.glyphWidth = i961[3]
  i960.glyphHeight = i961[4]
  i960.minX = i961[5]
  i960.maxX = i961[6]
  i960.minY = i961[7]
  i960.maxY = i961[8]
  i960.uvBottomLeftX = i961[9]
  i960.uvBottomLeftY = i961[10]
  i960.uvBottomRightX = i961[11]
  i960.uvBottomRightY = i961[12]
  i960.uvTopLeftX = i961[13]
  i960.uvTopLeftY = i961[14]
  i960.uvTopRightX = i961[15]
  i960.uvTopRightY = i961[16]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i963 = data
  i962.name = i963[0]
  var i965 = i963[1]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i965[i + 0]) );
  }
  i962.states = i964
  var i967 = i963[2]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i967[i + 0]) );
  }
  i962.layers = i966
  var i969 = i963[3]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i969[i + 0]) );
  }
  i962.parameters = i968
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i973 = data
  i972.cycleOffset = i973[0]
  i972.cycleOffsetParameter = i973[1]
  i972.cycleOffsetParameterActive = !!i973[2]
  i972.mirror = !!i973[3]
  i972.mirrorParameter = i973[4]
  i972.mirrorParameterActive = !!i973[5]
  i972.motionId = i973[6]
  i972.nameHash = i973[7]
  i972.fullPathHash = i973[8]
  i972.speed = i973[9]
  i972.speedParameter = i973[10]
  i972.speedParameterActive = !!i973[11]
  i972.tag = i973[12]
  i972.name = i973[13]
  i972.writeDefaultValues = !!i973[14]
  var i975 = i973[15]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i975[i + 0]) );
  }
  i972.transitions = i974
  var i977 = i973[16]
  var i976 = []
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 2, i976, '')
  }
  i972.behaviours = i976
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i981 = data
  i980.fullPath = i981[0]
  i980.canTransitionToSelf = !!i981[1]
  i980.duration = i981[2]
  i980.exitTime = i981[3]
  i980.hasExitTime = !!i981[4]
  i980.hasFixedDuration = !!i981[5]
  i980.interruptionSource = i981[6]
  i980.offset = i981[7]
  i980.orderedInterruption = !!i981[8]
  i980.destinationStateNameHash = i981[9]
  i980.destinationStateMachineId = i981[10]
  i980.isExit = !!i981[11]
  i980.mute = !!i981[12]
  i980.solo = !!i981[13]
  var i983 = i981[14]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i983[i + 0]) );
  }
  i980.conditions = i982
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i989 = data
  i988.blendingMode = i989[0]
  i988.defaultWeight = i989[1]
  i988.name = i989[2]
  i988.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i989[3], i988.stateMachine)
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i991 = data
  i990.id = i991[0]
  i990.defaultStateNameHash = i991[1]
  var i993 = i991[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i993[i + 0]) );
  }
  i990.entryTransitions = i992
  var i995 = i991[3]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i995[i + 0]) );
  }
  i990.anyStateTransitions = i994
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i999 = data
  i998.destinationStateNameHash = i999[0]
  i998.destinationStateMachineId = i999[1]
  i998.isExit = !!i999[2]
  i998.mute = !!i999[3]
  i998.solo = !!i999[4]
  var i1001 = i999[5]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1001[i + 0]) );
  }
  i998.conditions = i1000
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1005 = data
  i1004.defaultBool = !!i1005[0]
  i1004.defaultFloat = i1005[1]
  i1004.defaultInt = i1005[2]
  i1004.name = i1005[3]
  i1004.nameHash = i1005[4]
  i1004.type = i1005[5]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1009[i + 0]) );
  }
  i1006.files = i1008
  i1006.componentToPrefabIds = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1013 = data
  i1012.path = i1013[0]
  request.r(i1013[1], i1013[2], 0, i1012, 'unityObject')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1017[i + 0]) );
  }
  i1014.scriptsExecutionOrder = i1016
  var i1019 = i1015[1]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1019[i + 0]) );
  }
  i1014.sortingLayers = i1018
  var i1021 = i1015[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1021[i + 0]) );
  }
  i1014.cullingLayers = i1020
  i1014.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1015[3], i1014.timeSettings)
  i1014.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1015[4], i1014.physicsSettings)
  i1014.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1015[5], i1014.physics2DSettings)
  i1014.removeShadows = !!i1015[6]
  i1014.autoInstantiatePrefabs = !!i1015[7]
  i1014.enableAutoInstancing = !!i1015[8]
  i1014.lightmapEncodingQuality = i1015[9]
  i1014.desiredColorSpace = i1015[10]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.value = i1025[1]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1029 = data
  i1028.id = i1029[0]
  i1028.name = i1029[1]
  i1028.value = i1029[2]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1033 = data
  i1032.id = i1033[0]
  i1032.name = i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1035 = data
  i1034.fixedDeltaTime = i1035[0]
  i1034.maximumDeltaTime = i1035[1]
  i1034.timeScale = i1035[2]
  i1034.maximumParticleTimestep = i1035[3]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1037 = data
  i1036.gravity = new pc.Vec3( i1037[0], i1037[1], i1037[2] )
  i1036.defaultSolverIterations = i1037[3]
  i1036.autoSyncTransforms = !!i1037[4]
  i1036.autoSimulation = !!i1037[5]
  var i1039 = i1037[6]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1039[i + 0]) );
  }
  i1036.collisionMatrix = i1038
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1043 = data
  i1042.enabled = !!i1043[0]
  i1042.layerId = i1043[1]
  i1042.otherLayerId = i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'material')
  i1044.gravity = new pc.Vec2( i1045[2], i1045[3] )
  i1044.positionIterations = i1045[4]
  i1044.velocityIterations = i1045[5]
  i1044.velocityThreshold = i1045[6]
  i1044.maxLinearCorrection = i1045[7]
  i1044.maxAngularCorrection = i1045[8]
  i1044.maxTranslationSpeed = i1045[9]
  i1044.maxRotationSpeed = i1045[10]
  i1044.timeToSleep = i1045[11]
  i1044.linearSleepTolerance = i1045[12]
  i1044.angularSleepTolerance = i1045[13]
  i1044.defaultContactOffset = i1045[14]
  i1044.autoSimulation = !!i1045[15]
  i1044.queriesHitTriggers = !!i1045[16]
  i1044.queriesStartInColliders = !!i1045[17]
  i1044.callbacksOnDisable = !!i1045[18]
  i1044.reuseCollisionCallbacks = !!i1045[19]
  i1044.autoSyncTransforms = !!i1045[20]
  var i1047 = i1045[21]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1047[i + 0]) );
  }
  i1044.collisionMatrix = i1046
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1051 = data
  i1050.enabled = !!i1051[0]
  i1050.layerId = i1051[1]
  i1050.otherLayerId = i1051[2]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1055 = data
  i1054.weight = i1055[0]
  i1054.vertices = i1055[1]
  i1054.normals = i1055[2]
  i1054.tangents = i1055[3]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1059 = data
  i1058.mode = i1059[0]
  i1058.parameter = i1059[1]
  i1058.threshold = i1059[2]
  return i1058
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startDelayMultiplier":4,"startLifetime":5,"startLifetimeMultiplier":6,"startSpeed":7,"startSpeedMultiplier":8,"startSize3D":9,"startSize":10,"startSizeMultiplier":11,"startSizeX":12,"startSizeXMultiplier":13,"startSizeY":14,"startSizeYMultiplier":15,"startSizeZ":16,"startSizeZMultiplier":17,"startRotation3D":18,"startRotation":19,"startRotationMultiplier":20,"startRotationX":21,"startRotationXMultiplier":22,"startRotationY":23,"startRotationYMultiplier":24,"startRotationZ":25,"startRotationZMultiplier":26,"startColor":27,"gravityModifier":28,"gravityModifierMultiplier":29,"simulationSpace":30,"customSimulationSpace":31,"simulationSpeed":33,"useUnscaledTime":34,"scalingMode":35,"playOnAwake":36,"maxParticles":37,"emitterVelocityMode":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"m_Mode":0,"m_CurveMin":1,"m_CurveMax":2,"m_CurveMultiplier":3,"m_ConstantMin":4,"m_ConstantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"m_Mode":0,"m_GradientMin":1,"m_GradientMax":2,"m_ColorMin":3,"m_ColorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverTimeMultiplier":2,"rateOverDistance":3,"rateOverDistanceMultiplier":4,"bursts":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7,"range":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusSpeedMultiplier":10,"radiusThickness":11,"angle":12,"length":13,"boxThickness":14,"meshShapeType":17,"mesh":18,"meshRenderer":20,"skinnedMeshRenderer":22,"useMeshMaterialIndex":24,"meshMaterialIndex":25,"useMeshColors":26,"normalOffset":27,"arc":28,"arcMode":29,"arcSpread":30,"arcSpeed":31,"arcSpeedMultiplier":32,"donutRadius":33,"position":34,"rotation":37,"scale":40},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9,"range":10},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"frameOverTimeMultiplier":7,"startFrame":8,"startFrameMultiplier":9,"cycleCount":10,"rowIndex":11,"flipU":12,"flipV":13,"spriteCount":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"speedModifier":7,"speedModifierMultiplier":8,"space":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"strengthXMultiplier":5,"strengthYMultiplier":6,"strengthZMultiplier":7,"frequency":8,"damping":9,"octaveCount":10,"octaveMultiplier":11,"octaveScale":12,"quality":13,"scrollSpeed":14,"scrollSpeedMultiplier":15,"remapEnabled":16,"remapX":17,"remapY":18,"remapZ":19,"remapXMultiplier":20,"remapYMultiplier":21,"remapZMultiplier":22,"positionAmount":23,"rotationAmount":24,"sizeAmount":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2,"curveMultiplier":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"space":7,"randomized":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"limitMultiplier":5,"limitXMultiplier":6,"limitYMultiplier":7,"limitZMultiplier":8,"dampen":9,"separateAxes":10,"space":11,"drag":12,"dragMultiplier":13,"multiplyDragByParticleSize":14,"multiplyDragByParticleVelocity":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"center":0,"radius":3,"mass":4,"suspensionDistance":5,"forceAppPointDistance":6,"suspensionSpring":7,"forwardFriction":8,"sidewaysFriction":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"lineHeight":2,"fontSize":3,"characterInfo":4,"texture":5},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"autoSyncTransforms":4,"autoSimulation":5,"collisionMatrix":6},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[30],"79":[42],"80":[16],"81":[16],"82":[16],"83":[16],"84":[16],"85":[16],"86":[16],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[88],"96":[88],"97":[88],"98":[88],"99":[88],"100":[88],"101":[42],"102":[7],"103":[104],"105":[104],"56":[11],"44":[11],"64":[63],"21":[17],"20":[26],"22":[17],"106":[107],"108":[11],"109":[12,11],"58":[56],"14":[12,11],"110":[11],"57":[56],"111":[11],"112":[11],"113":[11],"114":[11],"115":[11],"116":[11],"117":[11],"118":[11],"119":[12,11],"120":[12,11],"121":[11],"122":[11],"123":[11],"66":[11],"48":[12,11],"124":[11],"125":[54],"126":[54],"55":[54],"127":[54],"128":[42],"129":[42],"130":[11],"131":[12,11],"132":[7],"133":[12,11],"134":[12,11],"135":[7,12,11],"136":[11,12],"137":[11]}

Deserializers.types = ["UnityEngine.Shader","DG.Tweening.Core.DOTweenSettings","UnityEngine.Transform","UnityEngine.MonoBehaviour","WheatPosInRowRandomizer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","VariableJoystick","UnityEngine.Rigidbody","CarController","UnityEngine.WheelCollider","UnityEngine.GameObject","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","RaceCar","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","JustWheelMeshes","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","BlobShadowMovement","SWS.splineMove","BotWheels","Bot","SWS.PathManager","UnityEngine.SphereCollider","UnityEngine.MeshCollider","FinishTrigger","Checkpoint","CarTrigger","GameManager","UnityEngine.Camera","Countdown","ButtonInput","UnityEngine.CanvasGroup","WheatGenerator","LunaUIFields","UnityEngine.UI.Text","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Sprite","UnityEngine.Font","UnityEngine.UI.Outline","WinScreenWidget","UnityEngine.UI.Button","EndGameButton","PositionWidget","UnityEngine.UI.Slider","WheatSliderWidget","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.UIElements.StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

