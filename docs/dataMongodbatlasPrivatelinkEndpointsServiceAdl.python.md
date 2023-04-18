# `data_mongodbatlas_privatelink_endpoints_service_adl`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_privatelink_endpoints_service_adl`](https://www.terraform.io/docs/providers/mongodbatlas/d/privatelink_endpoints_service_adl).

# `dataMongodbatlasPrivatelinkEndpointsServiceAdl` Submodule <a name="`dataMongodbatlasPrivatelinkEndpointsServiceAdl` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceAdl <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/privatelink_endpoints_service_adl mongodbatlas_privatelink_endpoints_service_adl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/privatelink_endpoints_service_adl#project_id DataMongodbatlasPrivatelinkEndpointsServiceAdl#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/privatelink_endpoints_service_adl#id DataMongodbatlasPrivatelinkEndpointsServiceAdl#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/privatelink_endpoints_service_adl#project_id DataMongodbatlasPrivatelinkEndpointsServiceAdl#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/privatelink_endpoints_service_adl#id DataMongodbatlasPrivatelinkEndpointsServiceAdl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.links">links</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList">DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList">DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.totalCount">total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.links"></a>

```python
links: DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList">DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList</a>

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.results"></a>

```python
results: DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList">DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList</a>

---

##### `total_count`<sup>Required</sup> <a name="total_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.totalCount"></a>

```python
total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/privatelink_endpoints_service_adl#project_id DataMongodbatlasPrivatelinkEndpointsServiceAdl#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/privatelink_endpoints_service_adl#id DataMongodbatlasPrivatelinkEndpointsServiceAdl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/privatelink_endpoints_service_adl#project_id DataMongodbatlasPrivatelinkEndpointsServiceAdl#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/privatelink_endpoints_service_adl#id DataMongodbatlasPrivatelinkEndpointsServiceAdl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks()
```


### DataMongodbatlasPrivatelinkEndpointsServiceAdlResults <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResults()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.href">href</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.rel">rel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks">DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.href"></a>

```python
href: str
```

- *Type:* str

---

##### `rel`<sup>Required</sup> <a name="rel" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.rel"></a>

```python
rel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinksOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks">DataMongodbatlasPrivatelinkEndpointsServiceAdlLinks</a>

---


### DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference <a name="DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoints_service_adl

dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResults">DataMongodbatlasPrivatelinkEndpointsServiceAdlResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasPrivatelinkEndpointsServiceAdlResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointsServiceAdl.DataMongodbatlasPrivatelinkEndpointsServiceAdlResults">DataMongodbatlasPrivatelinkEndpointsServiceAdlResults</a>

---



